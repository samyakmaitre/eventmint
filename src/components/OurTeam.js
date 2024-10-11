import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const teamMembers = [
    {
        name: "Samyak Maitre",
        role: "Project Maintainer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        description: "Samyak is the project maintainer behind Eventmint. He ensures that the platform stays up-to-date with the latest features.",
        contact: "samyakmaitre@gmail.com"
    },
    {
        name: "Jane Smith",
        role: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        description: "Jane leads our marketing strategies, bringing creativity and passion to every campaign."
    },
    {
        name: "Emily Johnson",
        role: "Lead Developer",
        image: "https://randomuser.me/api/portraits/women/56.jpg",
        description: "Emily is responsible for Eventmint’s robust platform and ensures the smoothest user experience."
    },
    {
        name: "Michael Brown",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        description: "Michael oversees product development and ensures we deliver the best features."
    },
    {
        name: "Sophie Davis",
        role: "UX/UI Designer",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
        description: "Sophie crafts delightful user experiences for our platform with her keen design sense."
    },
    {
        name: "Daniel Harris",
        role: "Operations Manager",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        description: "Daniel ensures our operations run smoothly, keeping everything on track."
    }
];

const Team = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto my-16 p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-12 text-black">Meet Our Team</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg cursor-pointer shadow-lg text-center transition transform hover:scale-105 hover:bg-gray-200 duration-300">
                            <img
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="text-xl font-semibold text-black mb-2">{member.name}</h3>
                            <p className="text-red-600 mb-4">{member.role}</p>
                            <p className="text-gray-700 mb-4">{member.description}</p>
                            {member.contact && (
                                <p className="text-sm text-gray-600">
                                    <strong>Email:</strong> <a href={`mailto:${member.contact}`} className="text-blue-500 underline hover:text-blue-700">{member.contact}</a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Team;
