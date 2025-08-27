import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white w-full border-t border-gray-700">
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-10">
            {/* Logo and description section */}
            <div className="md:col-span-4">
              <a href="/" className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  className="h-10"
                  alt="Logo"
                />
                <span className="text-2xl font-semibold text-white">
                  Examino App
                </span>
              </a>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Say goodbye to paper-making chaos. Our smart solution handles the heavy lifting—so you can focus on what matters.
              </p>
            </div>

            <div className="hidden md:block md:col-span-1"></div>

            {/* Links section */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              {[
                {
                  heading: "Boring Stuff",
                  links: ["Documentation", "Help Center", "Tutorials", "FAQs"],
                },
                {
                  heading: "Our Company",
                  links: ["About Us", "Contact", "Careers", "Blog"],
                },
                {
                  heading: "Legal Stuff",
                  links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
                },
              ].map((section) => (
                <div key={section.heading}>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                    {section.heading}
                  </h2>
                  <ul className="space-y-3 text-gray-400">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm hover:text-blue-500 transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 w-full" />

        <div className="max-w-screen-xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-400">
              © 2025 Examino App. All rights reserved.
            </span>
            <div className="flex items-center gap-5">
              {[
                { label: "Facebook", path: "M24 12.073c0-6.627..." },
                { label: "Twitter", path: "M23.953 4.57a10 10..." },
                { label: "Instagram", path: "M12 2.163c3.204 0..." },
                { label: "LinkedIn", path: "M20.447 20.452h-3.554..." },
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={icon.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
