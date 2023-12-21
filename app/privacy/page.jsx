// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl">
      <div className="text-4xl font-bold text-gray-700 mb-8">
        Privacy Policy
      </div>

      <div className="text-lg text-gray-700 dark:text-gray-600">
        <p className="mb-8">
          Welcome to [Your Website/Company Name]. We respect your privacy and
          are committed to protecting it through our compliance with this
          policy.
        </p>

        <p className="mb-8">
          This policy describes the types of information we may collect from you
          or that you may provide when you visit our website [Your Website URL]
          (our `Website``) and our practices for collecting, using, maintaining,
          protecting, and disclosing that information.
        </p>

        <p className="mb-8">
          <strong>Information We Collect:</strong>
        </p>
        <ul className="list-disc pl-8 mb-8">
          <li>
            Your name, email address, and other contact details when you fill
            out forms on our Website.
          </li>
          <li>
            Information about your device and internet connection, including
            your IP address, operating system, and browser details.
          </li>
          <li>Any other information you provide to us voluntarily.</li>
        </ul>

        <p className="mb-8">
          <strong>How We Use Your Information:</strong>
        </p>
        <p className="mb-8">
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>
        <ul className="list-disc pl-8 mb-8">
          <li>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>To improve our website to better serve you.</li>
          <li>
            To send periodic emails regarding your order or other products and
            services.
          </li>
        </ul>

        <p className="mb-8">
          <strong>Third-Party Disclosure:</strong>
        </p>
        <p className="mb-8">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information.
        </p>

        <p className="mb-8">
          This is just a basic template. Depending on your specific needs and
          the nature of your website or application, you may need to tailor it
          to include more detailed information. It`s always a good idea to
          consult with legal professionals to ensure your privacy policy
          complies with applicable laws and regulations.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
