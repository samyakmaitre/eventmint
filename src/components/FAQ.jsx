import React, { useState } from "react";
import '../assets/styles/FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="w-full max-w-md mx-auto faq-body">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b">
            <button
              className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-semibold">{item.title}</span>
              <span className="ml-2">
                {openIndex === index ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const accordionData = [
  {
    title: "How do I register for an event?",
    content: "Once you've found an event you're interested in, click on the event listing and follow the on-screen instructions to register. You may be prompted to provide attendee details and complete payment if applicable.",
  },
  {
    title: "How do I contact the event organizer if I have any questions?",
    content: "Placeholder content for the second accordion item.Each event listing has a “Contact Organizer” button that allows you to directly reach out to the organizer with any questions or concerns.",
  },
  {
    title: "How do I become an event organizer on Event Mint?",
    content: "If you want to host and manage events on Event Mint, simply sign up as an organizer, complete the organizer profile, and start creating events! Our platform offers tools for event creation, registration management, and payment handling.",
  },
  {
    title: "What payment methods are accepted?",
    content: "Event Mint supports a variety of payment methods, including credit/debit cards, online banking, and popular digital wallets for smooth and secure transactions.",
  },
  {
    title: "Can I cancel my registration for an event?",
    content: "Yes, depending on the event's cancellation policy set by the organizer. You can find the cancellation option under your event registrations. Refunds (if applicable) will be processed according to the event's terms and conditions.",
  },
];

export default FAQ;
