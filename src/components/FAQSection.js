import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Navbar from "./NavBar";
import Footer from "./Footer";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "What types of events can I view on Eventmint?", answer: "You can view various events categorized by type, date, and location." },
        { question: "How do I register for an event?", answer: "Registration is secure and seamless. Just create an account and follow the prompts to register for events." },
        { question: "Can I reserve seats for an event?", answer: "Yes, you can check real-time seat availability and make reservations directly through the platform." },
        { question: "What payment methods are accepted?", answer: "We integrate with secure payment gateways like Stripe for hassle-free event registration." },
        { question: "How can event organizers manage attendees?", answer: "Event organizers have access to tools that allow them to track and manage attendee details effectively." },
        { question: "Is Eventmint's design responsive?", answer: "Absolutely! Eventmint is fully responsive, ensuring a great experience on mobile, tablet, and desktop devices." },
        { question: "How can I discover events easily?", answer: "You can use our search and filter options for quick and easy event discovery." },
        { question: "Does Eventmint feature dynamic content?", answer: "Yes, we utilize image sliders and event cards to enhance user experience." },
        { question: "Who can I contact for more information?", answer: "Feel free to reach out to Samyak Maitre at samyakmaitre@gmail.com for any questions or suggestions." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <section className="faq-section py-10 font-inter" id="faqs">
                <h2 className="text-4xl text-center text-black mb-8">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4 w-3/4 mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white border-2 border-orange-100 rounded-lg py-3 px-4 cursor-pointer transition-transform duration-300 ease-in-out ${activeIndex === index ? ' bg-orange-100 border-orange-500' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-black mb-0">{faq.question}</h3>
                                <span className="text-xl text-orange-600">
                                    {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </div>
                            <div className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen opacity-100 pt-3' : 'max-h-0 opacity-0 pt-0'}`}>
                                <p className="text-gray-700 text-left mb-0">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <Footer />
        </>
    );
};

export default FAQSection;
