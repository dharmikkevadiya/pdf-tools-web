// ProtectPdf.js
import React from 'react';
import Image from 'next/image';

const ProtectPdf = () => {
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
          src="/assests/Protect PDF-02.png"
          width={120}
          height={100}
          alt="Protect PDF"
        />
        <h1 className="text-4xl font-bold text-gray-700">Protect PDF</h1>
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-400">
        <p className="mb-8">
          Safeguard your PDFs with our Protect PDF tool. If you need to restrict
          access or ensure confidentiality, this tool provides a secure solution
          for protecting your sensitive documents.
        </p>

        <p className="mb-6">
          <strong>How to Protect PDFs:</strong>
        </p>

        <ol className="list-decimal pl-8 mb-8">
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 1:</span>{' '}
            Select the PDF file you want to protect. You can choose to set a
            password or apply encryption to control access.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 2:</span>{' '}
            Configure the security settings to meet your requirements, such as
            password strength and permissions.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 3:</span>{' '}
            Click on the `Protect PDF`` button to apply the security measures.
          </li>
          <li>
            <span className="text-gray-700 dark:text-gray-500">Step 4:</span>{' '}
            Your protected PDF is ready for download, ensuring that only
            authorized individuals can access the content.
          </li>
        </ol>

        <p className="mb-8">
          Our Protect PDF tool provides robust security features, allowing you
          to control who can view and modify your PDF documents. Enjoy peace of
          mind knowing that your sensitive information is safeguarded.
        </p>

        <p className="mb-8">
          Experience a secure PDF protection process with an easy-to-use
          interface and reliable encryption. Say goodbye to unauthorized access
          and hello to enhanced document security.
        </p>

        <p className="mb-8">
          Enhance your document protection with our Protect PDF tool. Say
          goodbye to worries about privacy and hello to a more secure approach
          to handling sensitive PDF content.
        </p>
      </div>
    </div>
  );
};

export default ProtectPdf;
