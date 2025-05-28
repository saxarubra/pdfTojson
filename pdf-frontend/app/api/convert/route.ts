import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Temporaneamente disabilitato per test build' }, { status: 503 });
} 