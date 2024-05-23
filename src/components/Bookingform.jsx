import React from "react";

const BookingForm = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-4">Book Tickets</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">Close</button>
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 ml-4 rounded-lg hover:bg-blue-600 focus:outline-none">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
