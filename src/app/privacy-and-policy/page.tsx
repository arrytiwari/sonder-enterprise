import Link from "next/link";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Privacy Policy</h1>
      <p className="text-lg text-gray-600 mb-4">
        At Sonder Enterprises, we value your privacy and are committed to protecting the personal data you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">1. Information Collection</h2>
      <p className="text-gray-600 mb-4">
        We collect personal information when you interact with our website or use our services. The information we may collect includes your name, email address, and any messages or inquiries you send through our contact forms.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">2. Data Usage</h2>
      <p className="text-gray-600 mb-4">
        Your personal data is used primarily to communicate with you, provide the services you've requested, and improve our offerings. We may also use your data to send you marketing materials, but you can opt-out of these communications at any time.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">3. Data Sharing</h2>
      <p className="text-gray-600 mb-4">
        We do not sell, rent, or share your personal information with third parties except in the following circumstances:
      </p>
      <ul className="list-inside list-disc text-gray-600 mb-4">
        <li>When required by law or to comply with legal processes.</li>
        <li>To third-party service providers who assist in providing our services (e.g., hosting, payment processing).</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">4. Refund Policy</h2>
      <p className="text-gray-600 mb-4">
        If you are not satisfied with our services, we offer a refund policy under the following conditions:
      </p>
      <ul className="list-inside list-disc text-gray-600 mb-4">
        <li>Refund requests must be made within 14 days of the service delivery or purchase date.</li>
        <li>Refunds will not be granted after 14 days, and any disputes will be resolved based on the specific circumstances.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">5. Data Security</h2>
      <p className="text-gray-600 mb-4">
        We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">6. Your Rights</h2>
      <p className="text-gray-600 mb-4">
        You have the right to access, update, and delete your personal information at any time. If you wish to exercise any of these rights, please contact us at privacy@sonder.com.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">7. Changes to the Privacy Policy</h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of the revised Privacy Policy.
      </p>

      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
