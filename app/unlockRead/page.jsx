// UnlockPdf.js
import React from 'react';
import Image from 'next/image';

const UnlockPdf = () => {
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
          src="/assests/Unlock PDF-03.png"
          width={120}
          height={100}
          alt="Unlock PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Unlock PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Regain access to your secured PDFs with our Unlock PDF tool. If you
          have a password-protected PDF and need to remove restrictions, this
          tool provides a straightforward solution for unlocking your documents.
        </p>

        <p className="mb-6">
          <strong>How to Unlock PDFs:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 1:</span>{' '}
            Select the password-protected PDF file you want to unlock.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 2:</span>{' '}
            Enter the correct password for the PDF document.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 3:</span>{' '}
            Click on the `Unlock PDF` button to remove the password and access
            restrictions.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 4:</span>{' '}
            Your unlocked PDF is ready for download, allowing you to view and
            edit the content without any restrictions.
          </li>
        </ol>

        <p className="mb-8">
          Our Unlock PDF tool ensures a hassle-free process for removing
          password protection from your PDF documents. Regain control and access
          your PDFs without any limitations.
        </p>

        <p className="mb-8">
          Enjoy the convenience of unlocking PDFs with a user-friendly interface
          and swift processing. Say goodbye to locked content and hello to a
          liberated PDF experience.
        </p>

        <p className="mb-8">
          Simplify the process of unlocking PDFs with our dedicated tool. Say
          goodbye to password barriers and hello to seamless access to your PDF
          content.
        </p>
      </div>
    </div>
  );
};

export default UnlockPdf;
