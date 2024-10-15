import React from "react";

function Offers() {
  const offers = [
    {
      id: 1,
      title: "Early Bird Discount",
      description:
        "Get 20% off on event tickets if you register 15 days before the event date. Hurry up and grab your seats!",
      validity: "Valid till 25th October 2024",
      code: "EARLYBIRD20",
    },
    {
      id: 2,
      title: "Student Discount",
      description:
        "Exclusive offer for students! Use your student ID to avail a 15% discount on any event.",
      validity: "Ongoing",
      code: "STUDENT15",
    },
    {
      id: 3,
      title: "Group Booking Discount",
      description:
        "Planning to attend with friends? Book tickets for 5 or more people and get 10% off!",
      validity: "Valid for all group bookings",
      code: "GROUP10",
    },
    {
      id: 4,
      title: "Festive Season Offer",
      description:
        "Celebrate the festive season with a 25% discount on selected events. Don't miss out!",
      validity: "Valid during the festive season (Diwali 2024)",
      code: "FESTIVE25",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Special Offers
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Explore the latest offers and discounts to make your event experience even more rewarding.
        </p>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-red-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400 hover:bg-red-50"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-2 group-hover:text-red-600">
                {offer.title}
              </h2>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Validity: {offer.validity}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-700">Code: {offer.code}</span>
                <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all transform hover:scale-110">
                  Apply Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
