import React from 'react';

const PrivacyPage = () => {
  const lastUpdated = "January 28, 2026";

  return (
    // Removed max-w from outer container to use full screen width
    <div className="bg-gray-50 min-h-screen py-6 md:py-12">
      <div className="w-full bg-white shadow-sm overflow-hidden">
        
        {/* Full-width Header */}
        <div className="bg-blue-600 py-12 px-6 md:px-16 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-lg opacity-80">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content Area - Uses max-w-7xl for optimal wide-screen readability */}
        <div className="max-w-7xl mx-auto p-6 md:p-16 space-y-10 text-gray-700 text-lg leading-relaxed">
          
          <section>
            <p className="text-xl">
              At <span className="font-semibold text-blue-600">Your Travel Brand Name</span>, we are committed to protecting your privacy. This policy outlines how we handle your personal information to ensure your travel experiences are seamless and secure.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Grid Layout for Desktop to use the extra width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Information We Collect
              </h2>
              <p>To facilitate your travel bookings, we collect the following:</p>
              <ul className="list-disc ml-8 space-y-3">
                <li><strong>Personal Identifiers:</strong> Name, email address, phone number.</li>
                <li><strong>Travel Documentation:</strong> Passport and visa details for international tours.</li>
                <li><strong>Payment Information:</strong> Encrypted credit card details and billing addresses.</li>
                <li><strong>Preferences:</strong> Dietary and accessibility needs.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                How We Use Your Data
              </h2>
              <p>Your data is used specifically to:</p>
              <ul className="list-disc ml-8 space-y-3">
                <li>Confirm and manage your tour reservations.</li>
                <li>Communicate itinerary changes or travel alerts.</li>
                <li>Improve our website user experience.</li>
                <li>Comply with legal and safety regulations.</li>
              </ul>
            </section>
          </div>

          <hr className="border-gray-100" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Third-Party Sharing
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-900">
                  <strong>Transparency Commitment:</strong> We do not sell your data. We only share details with hotels, airlines, and local guides necessary to fulfill your booking.
                </p>
              </div>
            </section>

            {/* Section 4 & 5 */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">4. Data Security</h2>
                <p>We use industry-standard SSL encryption and secure server protocols to protect your information.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">5. Your Rights</h2>
                <p>You may access, correct, or request the deletion of your data by contacting our support team.</p>
              </div>
            </section>
          </div>

          {/* Footer Contact */}
          <footer className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Have Questions?</h2>
              <p className="mt-2">Our privacy team is here to help with any concerns.</p>
            </div>
            <a 
              href="mailto:privacy@yourtravelwebsite.com" 
              className="mt-6 md:mt-0 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;