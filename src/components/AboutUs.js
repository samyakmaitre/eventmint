import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const galleryData = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Team Collaboration',
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Innovative Meetings',
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Creative Brainstorming',
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Team Celebrations',
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Office Fun',
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Team Outings',
    },
    {
        id: 7,
        image: 'https://images.pexels.com/photos/3184443/pexels-photo-3184443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Community Engagement',
    },
    {
        id: 8,
        image: 'https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Volunteer Work',
    }

];


const GallerySection = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Work Culture</h2>
                <p className="text-lg text-center mb-12 text-gray-600">
                    At Eventmint, we believe in fostering a collaborative and inclusive work environment. Here's a glimpse of our vibrant work culture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



const AboutUs = () => {
    return (
        <>
            <Navbar />
            <h1 className="text-5xl font-bold text-black text-center my-3">About Eventmint</h1>
            <div className="container mx-auto my-8 p-8 bg-gray-100">
                <p className="text-lg text-gray-800 mb-8 text-center">
                    Welcome to Eventmint, your ultimate platform for seamless event management! Our goal is to empower users to create, manage, and attend events effortlessly. Whether you're planning a corporate gathering, a social celebration, or any other event, Eventmint provides you with the tools you need to ensure its success.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            At Eventmint, we strive to revolutionize the event management experience. Our mission is to provide an all-in-one solution that simplifies event planning, increases engagement, and enhances the overall experience for both organizers and attendees.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What We Offer</h2>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>🎉 User-friendly event creation tools.</li>
                            <li>📅 Comprehensive event management features.</li>
                            <li>💳 Secure payment processing for paid events.</li>
                            <li>📊 Analytics and reporting to track your event's success.</li>
                            <li>🤝 Networking opportunities for attendees and organizers.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-8 transition-transform duration-300">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Team</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Our dedicated team consists of professionals with diverse backgrounds in event planning, technology, and customer service. We are passionate about creating unforgettable experiences and are here to support you every step of the way.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        With a shared commitment to excellence, our team works collaboratively to ensure that every event we manage is a success. We value creativity, innovation, and dedication, which are at the heart of everything we do.
                    </p>
                    <a
                        href="/our-team"
                        className="inline-block mt-4 text-red-600 font-semibold hover:text-red-700 transition duration-300 border-b-1 border-transparent hover:border-red-600"
                    >
                        Know More
                    </a>
                </div>




            </div>

            <GallerySection />
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-8 w-4/5 m-auto mb-5">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We love to hear from our users! If you have any questions, feedback, or suggestions, feel free to reach out to us at <a href="mailto:samyakmaitre@gmail.com" className="text-red-600 underline hover:text-red-700 transition duration-300">samyakmaitre@gmail.com</a>.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;
