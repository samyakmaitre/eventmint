import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaChevronDown, FaChevronUp, FaLocationDot, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import logo from "../assets/images/logo4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons';

function SocialIcon({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
    </motion.a>
  );
}

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <motion.button
        className="flex justify-between items-center w-full py-4 text-left text-gray-300 hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className='mix-blend-screen w-30 h-20'/>
            </div>
            <p className="text-sm text-left ml-50">Your gateway to entertainment!</p>
            <div className="flex space-x-4">
              <SocialIcon icon={FaFacebookF} href="#" />
              <SocialIcon icon={FaXTwitter} href="#" />
              <SocialIcon icon={FaInstagram} href="#" />
              <SocialIcon icon={FaYoutube} href="#" />
              <SocialIcon icon={FaLinkedinIn} href="#" />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <AccordionItem title="Discover">
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors  no-underline">Movies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors  no-underline">Events</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Plays</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Sports</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Activities</a></li>
                </ul>
              </AccordionItem>
              <AccordionItem title="About">
                <ul className="space-y-2 text-sm no-underline">
                  <li><a href="#" className="hover:text-white transition-colors no-underline">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Our Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Careers</a></li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Services">
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Corporate Booking</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Gift Cards</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Rewards</a></li>
                </ul>
              </AccordionItem>
            </div>
            <div>
              <AccordionItem title="Help & Support">
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors no-underline">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">About Us</a></li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Legal">
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a></li>
                </ul>
              </AccordionItem>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h5 className="font-semibold text-white mb-4 text-lg">Stay Connected</h5>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  required
                />
                <motion.span 
                  className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <MdEmail size={20} />
                </motion.span>
              </div>
              <motion.button 
                type="submit" 
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-md transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-sm">
            &copy; 2024 EventMint. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white transition-colors  no-underline">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
          </div>
        </motion.div>

        {isVisible && (
          <motion.button 
            className="fixed bottom-8 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 ease-in-out duration-300"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        )}
      </div>
    </footer>
  );
}
