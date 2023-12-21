// CompressPdf.js
import React from 'react';
import Image from 'next/image';

const CompressPdf = () => {
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
          src="/assests/Compress PDF-06.png"
          width={120}
          height={100}
          alt="Compress PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Compress PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Reduce the size of your PDF files with our Compress PDF tool. If you
          need to optimize and minimize the file size for easier sharing and
          storage, this tool provides an efficient solution for compressing your
          PDF documents.
        </p>

        <p className="mb-6">
          <strong>How to Compress PDFs:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 1:</span>{' '}
            Select the PDF file you want to compress.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 2:</span>{' '}
            Choose the compression settings based on your preferences, balancing
            between file size reduction and quality.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 3:</span>{' '}
            Click on the `Compress PDF` button to apply the compression.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 4:</span>{' '}
            Your compressed PDF is ready for download, maintaining a smaller
            file size while preserving the essential content.
          </li>
        </ol>

        <p className="mb-8">
          Our Compress PDF tool optimizes your PDFs without compromising on
          quality. Enjoy the benefits of reduced file sizes for easier sharing
          and storage.
        </p>

        <p className="mb-8">
          Experience a quick and effective PDF compression process with our
          intuitive interface. Say goodbye to large file sizes and hello to a
          more streamlined document management.
        </p>

        <p className="mb-8">
          Simplify your PDF file management with our dedicated Compress PDF
          tool. Say goodbye to bulky documents and hello to a more efficient way
          of handling your PDFs.
        </p>
      </div>
    </div>
  );
};

export default CompressPdf;
