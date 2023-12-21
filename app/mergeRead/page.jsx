// MergePdf.js
import React from 'react';
import Image from 'next/image';

const MergePdfRead = () => {
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
          src="/assests/Merge PDF-01.png"
          width={120}
          height={100}
          alt="Merge PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Merge PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Merging PDF files can be a crucial task, especially when dealing with
          multiple documents that need to be consolidated. Our Merge PDF tool
          simplifies this process, providing you with a seamless way to combine
          several PDF files into a single, organized document.
        </p>

        <p className="mb-6">
          <strong>How to Merge PDFs:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-blue-700 dark:text-blue-500">Step 1:</span>{' '}
            Choose the PDF files you want to merge. You can select multiple
            files from different locations.
          </li>
          <li>
            <span className="text-blue-700 dark:text-blue-500">Step 2:</span>{' '}
            Click on the `Merge PDF` button to start the merging process.
          </li>
          <li>
            <span className="text-blue-700 dark:text-blue-500">Step 3:</span>{' '}
            Wait for the system to combine the selected PDFs into a unified
            document.
          </li>
          <li>
            <span className="text-blue-700 dark:text-blue-500">Step 4:</span>{' '}
            Once the merging is complete, download your consolidated PDF file
            instantly.
          </li>
        </ol>

        <p className="mb-8">
          Our Merge PDF tool is designed to enhance your document management
          experience. Whether you`re merging reports, presentations, or any
          other PDF files, this tool streamlines the process, saving you time
          and effort.
        </p>

        <p className="mb-8">
          With an intuitive interface and quick processing, you can efficiently
          handle your documents without the need for complex software. Simplify
          your workflow and enjoy the convenience of managing multiple PDFs
          effortlessly.
        </p>

        <p className="mb-8">
          Experience the power of efficient PDF merging with our tool. Say
          goodbye to the challenges of handling multiple files and hello to a
          more streamlined approach to document management.
        </p>
      </div>
    </div>
  );
};

export default MergePdfRead;
