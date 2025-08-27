import React from 'react';

function Pricing() {
  return (
    <section className="bg-black dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white dark:text-white mb-4">
            Choose the perfect plan for you
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Pick the option that fits your institution’s needs for creating high-quality exam papers.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">Introductory</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Perfect for smaller institutions and individual educators.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="text-5xl font-extrabold text-primary-600">₹199</span>
              <span className="text-gray-500 dark:text-gray-400 text-lg ml-2">/month</span>
            </div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Generate up to 50 exam papers per month.</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>5 exam paper formats</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Limited access to question repository</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Email notifications enabled</span>
              </li>
            </ul>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 py-2 px-5 rounded-lg text-lg font-medium">
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">Elite</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Ideal for medium-sized schools and universities.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="text-5xl font-extrabold text-primary-600">₹499</span>
              <span className="text-gray-500 dark:text-gray-400 text-lg ml-2">/month</span>
            </div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Unlimited exam papers generation</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>15 personalized paper formats</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 py-2 px-5 rounded-lg text-lg font-medium">
              Get Started
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">Business</h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Perfect for large educational organizations and universities.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="text-5xl font-extrabold text-primary-600">₹34999</span>
              <span className="text-gray-500 dark:text-gray-400 text-lg ml-2">/month</span>
            </div>
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Complete access to all features</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Advanced analytics and reports</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Dedicated support manager</span>
              </li>
            </ul>
            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 py-2 px-5 rounded-lg text-lg font-medium">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
