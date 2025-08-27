import React from 'react';

function ContactCard() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-800 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="py-8 lg:py-16 px-6 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-center text-white tracking-widest font-sans">Let’s Connect!</h2>
          <p className="mb-8 lg:mb-16 text-center text-white text-lg sm:text-xl">
            Got questions, feedback, or something on your mind? Drop us a message, and we’ll get back to you in no time!
          </p>
          
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 text-sm text-gray-900 bg-white rounded-lg shadow-xl border-2 border-transparent focus:ring-4 focus:ring-pink-400 dark:bg-gray-800 dark:text-white dark:focus:ring-pink-600"
                placeholder="e.g., yourname@domain.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">What’s the problem?</label>
              <input
                type="text"
                id="subject"
                className="w-full px-6 py-4 text-sm text-gray-900 bg-white rounded-lg shadow-xl border-2 border-transparent focus:ring-4 focus:ring-pink-400 dark:bg-gray-800 dark:text-white dark:focus:ring-pink-600"
                placeholder="Tell us how we can help"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Any extra thoughts?</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-6 py-4 text-sm text-gray-900 bg-white rounded-lg shadow-xl border-2 border-transparent focus:ring-4 focus:ring-pink-400 dark:bg-gray-800 dark:text-white dark:focus:ring-pink-600"
                placeholder="Drop a message or comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-gradient-to-r dark:from-pink-600 dark:to-red-600 dark:hover:from-pink-700 dark:hover:to-red-700 dark:focus:ring-pink-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactCard;
