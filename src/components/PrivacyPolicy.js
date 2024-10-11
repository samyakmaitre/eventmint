import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <section className="privacy-policy px-6 py-10 w-4/5 mx-auto font-sans text-gray-900">
                <h1 className="text-4xl font-bold text-center mb-10 font-serif text-red-600 transition duration-300 hover:scale-95 cursor-pointer hover:text-red-700">Privacy Policy</h1>
                <p className="mb-8 text-lg">
                    Welcome to Eventmint. This privacy policy explains how we collect, use, and share your personal information when you use our platform. By using Eventmint, you agree to the terms of this policy.
                </p>

                <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">
                        1. Information We Collect
                    </h2>
                    <p className="mb-4 text-lg">
                        When you use Eventmint, we may collect the following types of information:
                    </p>
                    <ul className="flex flex-wrap gap-10 text-lg">
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide when registering or using our services.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Event Information:</strong> We collect details related to events you organize or register for, such as event names, locations, and times.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Payment Information:</strong> We collect payment details when you register for paid events. We use third-party payment processors like Stripe to handle these transactions.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Usage Data:</strong> We collect information about how you use Eventmint, such as the pages you visit and the actions you take on the platform.
                        </li>
                    </ul>
                </div>


                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">2. How We Use Your Information</h2>
                    <p className="mb-4 text-lg">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li>To provide, operate, and maintain the Eventmint platform.</li>
                        <li>To process event registrations, payments, and seat reservations.</li>
                        <li>To improve user experience and optimize our platform’s functionality.</li>
                        <li>To communicate with you, including sending notifications and promotional emails.</li>
                        <li>To comply with legal obligations and prevent fraudulent activities.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">3. How We Share Your Information</h2>
                    <p className="mb-4 text-lg">
                        We do not sell your personal information. However, we may share your information in the following cases:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li>
                            <strong className="text-red-600">With Service Providers:</strong> We share your information with trusted third-party service providers to facilitate payments, manage event details, and improve our services.
                        </li>
                        <li>
                            <strong className="text-red-600">For Legal Reasons:</strong> We may share your information if required by law or in response to valid requests by government authorities.
                        </li>
                    </ul>
                </div>

                <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">
                        4. Your Rights
                    </h2>
                    <p className="mb-4 text-lg">
                        As a user of Eventmint, you have the following rights regarding your personal data:
                    </p>
                    <ul className="flex flex-wrap gap-6 text-lg">
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Access:</strong> You have the right to request access to the information we hold about you.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Correction:</strong> You can request that we correct any inaccurate information about you.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Deletion:</strong> You can request the deletion of your personal data from our systems.
                        </li>
                        <li className="w-full lg:w-[45%]">
                            <strong className="text-red-600">Objection:</strong> You have the right to object to the processing of your data in certain circumstances.
                        </li>
                    </ul>
                    <p className="mt-4 text-lg">
                        To exercise any of these rights, please contact us at
                        <a href="mailto:samyakmaitre@gmail.com" className="text-red-600 underline hover:text-red-700 transition duration-300">
                            samyakmaitre@gmail.com
                        </a>.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">5. Data Security</h2>
                    <p className="mb-4 text-lg">
                        We take the security of your personal information seriously and use appropriate measures to protect it. However, please note that no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-black transition duration-300 hover:scale-95 cursor-pointer hover:text-red-600">6. Changes to This Privacy Policy</h2>
                    <p className="mb-4 text-lg">
                        We may update this privacy policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes by email or via a notification on the platform.
                    </p>
                </div>

                <p className="text-sm text-gray-600">
                    Last updated: October 11, 2024
                </p>
            </section>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
