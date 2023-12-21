// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl">
      <div className="text-4xl font-bold text-gray-700 mb-8">Our Services</div>

      <div className="text-lg text-gray-700 dark:text-gray-600">
        <p className="mb-8">
          Welcome to [Your Website/Company Name], your go-to destination for
          versatile PDF utilities. We are dedicated to providing efficient and
          user-friendly tools for handling PDF documents.
        </p>

        <p className="mb-8">
          <strong>What We Offer:</strong>
        </p>
        <p className="mb-8">
          At [Your Website/Company Name], we specialize in a range of PDF
          utilities designed to simplify your document management. Our services
          include:
        </p>

        <ul className="list-disc pl-8 mb-8">
          <li>
            <strong>Crop PDF:</strong> Trim down specific sections of your PDF
            documents with precision.
          </li>
          <li>
            <strong>Protect PDF:</strong> Safeguard your PDFs by setting
            passwords and applying encryption.
          </li>
          <li>
            <strong>Unlock PDF:</strong> Regain access to password-protected
            PDFs effortlessly.
          </li>
          <li>
            <strong>Compress PDF:</strong> Reduce the size of your PDF files for
            easier sharing and storage.
          </li>
          <li>
            <strong>Convert to PDF:</strong> Transform various file formats into
            PDFs, including images, documents, and spreadsheets.
          </li>
        </ul>

        <p className="mb-8">
          <strong>Why Choose Us:</strong>
        </p>
        <p className="mb-8">
          [Your Website/Company Name] stands out for its commitment to user
          satisfaction and the following key features:
        </p>

        <ul className="list-disc pl-8 mb-8">
          <li>
            Intuitive Interface: Our tools are designed for ease of use,
            ensuring a seamless experience for users of all levels.
          </li>
          <li>
            Quick Processing: Enjoy swift processing times, allowing you to
            accomplish tasks efficiently.
          </li>
          <li>
            Versatility: Whether you need to crop, protect, unlock, compress, or
            convert PDFs, we`ve got you covered.
          </li>
          <li>
            Security: Our tools prioritize the security and privacy of your
            documents, giving you peace of mind.
          </li>
        </ul>

        <p className="mb-8">
          Thank you for choosing [Your Website/Company Name] for all your PDF
          utility needs. Explore our services and simplify your document
          management today!
        </p>
      </div>
    </div>
  );
};

export default About;
