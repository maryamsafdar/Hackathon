"use client"
import React from 'react'
import { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., sending data to server)
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-orange-400 flex justify-center items-center rounded-xl">
    <div className="max-w-md w-full p-8 -200 bg-myGray rounded-xl shadow-md">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-gray-800 mb-8">Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border-2 border-gray-400 rounded-xl p-2 focus:outline-none hover:border-gray-600 focus:border-gray-700 scroll-m-20 text-base font-xs tracking-tight"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border-2 border-gray-400 rounded-xl p-2 focus:outline-none hover:border-gray-600  focus:border-gray-700 scroll-m-20 text-base font-xs tracking-tight"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border-2 border-gray-400 rounded-xl p-2 focus:outline-none hover:border-gray-600 focus:border-gray-700 scroll-m-20 text-base font-xs tracking-tight"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-gray-900 text-white py-2 px-4  hover:bg-gray-800 focus:outline-none focus:bg-gray-800 rounded-xl scroll-m-20 text-base font-xs tracking-tight ">
          Send Message
        </button>
      </form>
    </div>
  </div>
    
  )
}

export default Contact