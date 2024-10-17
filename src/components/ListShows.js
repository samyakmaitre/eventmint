import React, { useState } from 'react';

function ListShows() {
  const [formData, setFormData] = useState({
    showTitle: '',
    description: '',
    venue: '',
    startDate: '',
    endDate: '',
    contactEmail: '',
    website: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
    console.log('Show Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            List Your Show
          </h1>
          <p className="text-xl text-gray-700">
            Submit your show details to feature it on our platform and reach a larger audience.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-lg p-10 space-y-8 max-w-4xl mx-auto border border-red-200"
        >
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Show Title
            </label>
            <input
              type="text"
              name="showTitle"
              value={formData.showTitle}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
              placeholder="Enter the show title"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
              placeholder="Provide a brief description of the show"
              rows="5"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Venue
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
              placeholder="Enter the venue"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
              placeholder="Enter contact email"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Website (optional)
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-red-400 transition duration-300 focus:outline-none"
              placeholder="Enter show website"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300"
            >
              Submit Show
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ListShows;