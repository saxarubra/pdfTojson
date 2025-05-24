declare module 'pdfplumber' {
  interface PDFPage {
    extract_text(): Promise<string>;
  }

  interface PDFDocument {
    pages: PDFPage[];
    close(): Promise<void>;
  }

  function open(buffer: Buffer): Promise<PDFDocument>;

  export { open, PDFDocument, PDFPage };
} 