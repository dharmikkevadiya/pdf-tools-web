// CropPdf.js
import React from 'react';
import Image from 'next/image';

const CropPdfRead = () => {
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
          src="/assests/Crop PDF-04.png"
          width={120}
          height={100}
          alt="Crop PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Crop PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Cropping PDFs becomes a breeze with our Crop PDF tool. If you need to
          trim down specific sections of your PDF documents, this tool provides
          a simple and efficient solution for precise cropping.
        </p>

        <p className="mb-6">
          <strong>How to Crop PDFs:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 1:</span>{' '}
            Select the PDF file you want to crop. You can choose the specific
            pages or areas you wish to trim.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 2:</span>{' '}
            Use the cropping tool to define the area you want to keep in the
            document.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 3:</span>{' '}
            Click on the `Crop PDF`` button to apply the changes.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 4:</span>{' '}
            Your cropped PDF is ready for download, containing only the
            specified sections.
          </li>
        </ol>

        <p className="mb-8">
          Our Crop PDF tool is designed for precision, ensuring that you retain
          only the essential parts of your document. Whether it`s removing
          unnecessary margins or focusing on specific content, this tool makes
          cropping hassle-free.
        </p>

        <p className="mb-8">
          Enjoy a seamless cropping experience with an intuitive interface and
          quick processing. Say goodbye to the excess and hello to a PDF that
          perfectly fits your needs.
        </p>

        <p className="mb-8">
          Simplify your document editing process with our Crop PDF tool. Say
          goodbye to the unnecessary and hello to a more focused approach to
          handling PDF content.
        </p>
      </div>
    </div>
  );
};

export default CropPdfRead;
