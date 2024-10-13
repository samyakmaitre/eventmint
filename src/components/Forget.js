import React, { useState } from 'react';

function Forget() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate a successful submission
    setSuccess(true);
    setEmail(''); // Reset email field
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>

        {success && (
          <div className="mb-4 text-green-600">
            Check your email for password reset instructions!
          </div>
        )}

        {error && (
          <div className="mb-4 text-red-600">{error}</div>
        )}

        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          required
          aria-label="Email Address"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forget;
