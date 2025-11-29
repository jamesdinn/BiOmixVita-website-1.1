import React from 'react';
import { Link } from 'wouter';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#8295b9'}} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="flex items-center space-x-2 mb-4">
                <img src="/biomixvitalogov3.png" alt="BiOmixVita Logo" className="h-10" />
              </a>
            </Link>
            <p className="text-gray-100 text-sm mb-4">
              OMICS & AI solutions for healthier & more sustainable futures
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/biomixvita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@biomixvita.com"
                className="text-gray-100 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Insights
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Get in Touch
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Partners
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-100 text-sm">
            © {new Date().getFullYear()} BiOmixVita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
