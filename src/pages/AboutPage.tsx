import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, Leaf, Info, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Aromatherapy Near Me | Our Mission & Services</title>
        <meta name="description" content="Learn about AromatherapyNearMe.com, the premier resource for finding professional aromatherapy providers and wellness shops in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-900">About AromatherapyNearMe.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding quality aromatherapy providers and wellness shops in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At AromatherapyNearMe.com, our mission is to connect individuals seeking quality essential oils and holistic wellness services with professional aromatherapy providers in their local area. We believe everyone deserves access to natural, therapeutic aromatherapy products from shops that understand their specific wellness needs.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of aromatherapy providers, making it easy to find the right wellness shop near you. Our platform allows you to browse listings by location, read detailed business profiles, and make informed decisions about where to purchase your essential oils and wellness products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-teal-800 mb-4">For Customers</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Find quality aromatherapy providers in your local area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Access detailed store profiles with products, services, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient options near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with aromatherapy professionals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-teal-800 mb-4">For Businesses</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential customers</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Showcase your services, products, and business details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Grow your customer base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-teal-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Why Aromatherapy Matters</h2>
            <p className="text-gray-700 mb-4">
              Aromatherapy is a holistic healing treatment that uses natural plant extracts to promote health and well-being. Essential oils are used in aromatherapy to improve both physical and emotional health, from stress relief to improved sleep quality and mood enhancement.
            </p>
            <p className="text-gray-700 mb-4">
              Professional aromatherapy providers offer high-quality essential oils and products that are pure, potent, and sustainably sourced. They provide expert guidance on proper usage, appropriate blends for specific concerns, and effective application methods to maximize therapeutic benefits.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Professional Aromatherapy Providers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Leaf className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Pure, therapeutic-grade essential oils</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Knowledgeable, certified staff</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Custom blending services</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-green-500 mt-1 mr-2" size={16} />
                    <span>Holistic wellness approach</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Regular Retail Stores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Leaf className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited selection of oils</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Potentially diluted or synthetic products</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Less expertise from staff</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Generic products without personalization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              AromatherapyNearMe.com was founded by a team of holistic wellness advocates who recognized the need for a specialized platform connecting aromatherapy providers with customers seeking quality essential oils and natural wellness solutions in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both aromatherapy professionals and customers, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on aromatherapy and essential oil providers. Many quality shops were difficult to find online, and customers struggled to locate professional-grade products in their areas.
            </p>
            <p className="text-gray-700">
              Today, AromatherapyNearMe.com is the premier online resource for aromatherapy providers across the United States. We continue to expand our listings and improve our platform to better serve both wellness businesses and their customers.
            </p>
          </div>
          
          <div className="bg-teal-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you an aromatherapy provider? Add your business to our directory and connect with potential customers in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-teal-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;