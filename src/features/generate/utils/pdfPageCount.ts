import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
// Vite resolves this to a worker script URL at build time.
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export const getPdfPageCount = async (file: File): Promise<number> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await getDocument({ data: arrayBuffer }).promise;
  const pageCount = pdf.numPages;
  await (pdf as { destroy?: () => Promise<void> }).destroy?.();
  return pageCount;
};
