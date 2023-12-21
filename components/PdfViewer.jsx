'use client';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const PdfViewer = ({ url, sx }) => {
  //   const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="h-screen w-screen" style={sx}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
        <Viewer fileUrl={url} />
      </Worker>
    </div>
  );
};
export default PdfViewer;
