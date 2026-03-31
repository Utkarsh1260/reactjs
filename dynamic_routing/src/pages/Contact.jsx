import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-white flex justify-center items-center">
      <form className="bg-stone-800 p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded bg-stone-700 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 rounded bg-stone-700 outline-none"
        />

        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 rounded bg-stone-700 outline-none"
        ></textarea>

        <button className="w-full bg-amber-500 hover:bg-amber-600 py-3 rounded font-semibold">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact