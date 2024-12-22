import Link from "next/link";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Terms of Service</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to Sonder Enterprises. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use our services.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-800 mt-6">1. Introduction</h2>
      <p className="text-gray-600 mb-4">
        These Terms of Service ("Terms") govern the access and use of our website and services, provided by Sonder Enterprises. The terms apply to all users of our website, including customers, visitors, and any individuals or entities who may interact with our services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">2. Services Provided</h2>
      <p className="text-gray-600 mb-4">
        Sonder Enterprises offers a variety of services, including but not limited to custom software development, web application development, and digital transformation solutions. Our services are designed to help businesses grow and innovate through the application of cutting-edge technologies.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">3. User Responsibilities</h2>
      <p className="text-gray-600 mb-4">
        Users are responsible for ensuring that all information provided is accurate and up to date. You agree not to use our services for unlawful purposes or in any way that could harm Sonder Enterprises, its affiliates, or third parties.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">4. Refund Policy</h2>
      <p className="text-gray-600 mb-4">
        We are committed to customer satisfaction. If for any reason you are not satisfied with the services provided by Sonder Enterprises, we offer a refund under the following conditions:
      </p>
      <ul className="list-inside list-disc text-gray-600 mb-4">
        <li>Refund requests must be made within 14 days of the service delivery or purchase date.</li>
        <li>To initiate a refund request, please contact our support team at support@sonder.com with details of the service and reason for the request.</li>
        <li>Refunds will only be processed if the service has not been fully utilized or if the service delivered does not meet the expectations outlined in our agreement.</li>
        <li>After 14 days, refunds will not be issued, and any disputes will be resolved on a case-by-case basis.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">5. Intellectual Property</h2>
      <p className="text-gray-600 mb-4">
        All intellectual property, including software, designs, and content provided by Sonder Enterprises, remains the property of Sonder Enterprises or its licensors. Users may not copy, modify, or distribute any materials without explicit permission.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">6. Limitation of Liability</h2>
      <p className="text-gray-600 mb-4">
        Sonder Enterprises will not be held liable for any damages arising from the use of our services, including but not limited to loss of profits, data, or business opportunities. Our liability is limited to the amount paid by the user for the specific service in question.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">7. Privacy Policy</h2>
      <p className="text-gray-600 mb-4">
        Your privacy is important to us. Please review our <Link href="/privacy-and-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">8. Governing Law</h2>
      <p className="text-gray-600 mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sonder Enterprises operates. Any disputes will be resolved under the jurisdiction of the relevant courts.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-6">9. Modifications</h2>
      <p className="text-gray-600 mb-4">
        Sonder Enterprises reserves the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. By continuing to use our services after such changes are posted, you accept the updated terms.
      </p>

      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
