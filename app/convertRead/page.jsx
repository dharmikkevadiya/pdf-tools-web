// ConvertPdf.js
import React from 'react';
import Image from 'next/image';

const ConvertPdf = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl">
      <div
        className="mt-20"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '100px',
        }}
      >
        <Image
          src="/assests/JPG to PDF-05.png"
          width={120}
          height={100}
          alt="Convert to PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Convert PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Transform various file formats into PDFs with our Convert to PDF tool.
          Whether you have images, documents, or spreadsheets, this tool
          provides versatile options for converting different file types to PDF.
        </p>

        <p className="mb-6">
          <strong>How to Convert to PDF:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 1:</span>{' '}
            Select the file you want to convert to PDF.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 2:</span>{' '}
            Choose the conversion option based on your file type (e.g., JPG to
            PDF, Excel to PDF, etc.).
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 3:</span>{' '}
            Customize any specific settings for the conversion if needed.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 4:</span>{' '}
            Click on the `Convert to PDF`` button to initiate the conversion
            process.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 5:</span>{' '}
            Your PDF is ready for download, preserving the content from the
            original file in PDF format.
          </li>
        </ol>

        <p className="mb-8">
          Our Convert to PDF tool supports a variety of file formats, including
          images, documents, and spreadsheets. Enjoy the flexibility of
          converting different file types to PDF with ease.
        </p>

        <p className="mb-8">
          Experience a seamless conversion process with our user-friendly
          interface. Say goodbye to format compatibility issues and hello to a
          unified PDF format for your content.
        </p>

        <p className="mb-8">
          Simplify your file conversion tasks with our dedicated Convert to PDF
          tool. Say goodbye to file format headaches and hello to a more
          versatile approach to handling your documents.
        </p>
      </div>
    </div>
  );
};

export default ConvertPdf;
