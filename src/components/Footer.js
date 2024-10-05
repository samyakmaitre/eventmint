import React from 'react';
import '../assets/styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="bg-[rgb(232,232,232)]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-start lg:justify-center">
              <div className="text-teal-600 font-bold text-4xl cursor-pointer transition-transform duration-200 transform hover:scale-105">
                eventmint
              </div>
            </div>
            <ul className="mt-6 flex justify-start lg:justify-center gap-6">
              {/* Social media icons */}
              {[
                { platform: 'Facebook', icon: faFacebook },
                { platform: 'Instagram', icon: faInstagram },
                { platform: 'Twitter', icon: faTwitter },
                { platform: 'GitHub', icon: faGithub },
                { platform: 'Dribbble', icon: faDribbble },
              ].map(({ platform, icon }) => (
                <li key={platform}>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <span className="sr-only">{platform}</span>
                    <FontAwesomeIcon icon={icon} className="w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900 text-lg">Services</p>
              <ul className="mt-4 space-y-2">
                {['Movies', 'Streams', 'Events', 'Plays'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-lg">Helpful Links</p>
              <ul className="mt-4 space-y-2">
                {['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900 text-lg">Company</p>
              <ul className="mt-4 space-y-2">
                {['About', 'Meet the Team'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-8">
          <p className="text-center text-x text-gray-500">
            &copy; 2024. Eventmint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
