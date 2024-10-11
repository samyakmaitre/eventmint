import { useState } from 'react';
import contactPageBg from '../assets/contactPageBg.jpg';
import Navbar from './NavBar';
import Footer from './Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to console
        console.log(formData);
        alert('Message Sent Successfully!');
        // Reset form data after submission
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center bg-[#e5e7eb] p-10 px-32 justify-between">
                {/* Left-side image */}
                <div className="lg:w-[45%] w-full flex justify-center h-[640px]">
                    <img
                        src={contactPageBg}
                        alt="Side Visual"
                        className="w-full object-cover h-full"
                    />
                </div>

                {/* Form Section */}
                <div className="lg:w-[45%] w-full p-8 bg-white">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact us</h2>
                    <p className="text-gray-600 mb-4">
                        Use this form for all general enquiries. We monitor these responses constantly during working hours. If you are looking to partner with us, please complete the new customer application form instead.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Full Name Input */}
                            <div className="w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    FULL NAME <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Phone Number Input */}
                            <div className="w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    PHONE NUMBER <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter your number"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Email Input */}
                            <div className="w-full">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    EMAIL <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                MESSAGE <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                className="w-full p-3 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 transition"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* reCAPTCHA & Submit Button */}
                        <div className="flex flex-col space-y-4">
                            <div>
                                {/* Placeholder for reCAPTCHA */}
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="recaptcha" className="w-4 h-4" />
                                    <label htmlFor="recaptcha" className="text-sm text-gray-600">
                                        I'm not a robot
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                            >
                                Send Your Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
