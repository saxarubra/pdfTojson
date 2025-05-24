import { NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Extract week start date
    const extractWeekStart = (text: string) => {
      const match = text.match(/Settimanale:\s*(\d{2}\/\d{2}\/\d{4})/);
      if (match) {
        const dateStr = match[1];
        return dateStr.split('/').reverse().join('-');
      }
      return null;
    };

    // Extract full shift content
    const extractFullShift = (parts: string[], startIdx: number): [string, number] => {
      const shiftParts: string[] = [];
      let i = startIdx;
      while (i < parts.length) {
        if (i > startIdx && (
          /^(RI|NL|\d{1,2}\.\d{2})/.test(parts[i]) ||
          /^[A-Z]{2}$/.test(parts[i]) ||
          /^(DOM|LUN|MAR|MER|GIO|VEN|SAB)$/.test(parts[i])
        )) {
          break;
        }
        shiftParts.push(parts[i]);
        i++;
      }
      return [shiftParts.join(' '), i];
    };

    const shifts: any[] = [];
    let weekStartDate = null;

    const data = await pdfParse(buffer);
    const fullText = data.text;
    const lines = fullText.split('\n');

    weekStartDate = extractWeekStart(fullText);
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 2 && /^[A-Z]{2}$/.test(parts[0])) {
        const employeeCode = parts[0];
        const row: Record<string, string> = { employee_code: employeeCode };
        let dayIndex = 0;
        let i = 1;

        while (i < parts.length && dayIndex < 7) {
          const [cellContent, newI] = extractFullShift(parts, i);
          row[`${days[dayIndex]}_shift`] = cellContent.trim();
          i = newI;
          dayIndex++;
        }

        while (dayIndex < 7) {
          row[`${days[dayIndex]}_shift`] = '';
          dayIndex++;
        }

        shifts.push(row);
      }
    }

    const result = {
      week_start_date: weekStartDate,
      shifts: shifts
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing PDF:', error instanceof Error ? error.message : error);
    console.error(error);
    return NextResponse.json({ error: 'Error processing PDF' }, { status: 500 });
  }
} 