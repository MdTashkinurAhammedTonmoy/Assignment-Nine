// ContactUs.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import dogCatimg from "../assets/dog-cat-lover.jpg"

export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Top Section */}
      <div className="text-center mb-8">
        <p className="text-red-600 uppercase font-semibold tracking-wide">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#023047] mt-2">Contact Us</h2>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-4 gap-6 text-center md:text-left mb-10">
        <div>
          <h3 className="text-lg font-semibold text-[#023047]">Location</h3>
          <p className="text-sm text-gray-700 mt-2">
            Pet Care Street <br /> Bangladesh
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#023047]">Our Hours</h3>
          <p className="text-sm text-gray-700 mt-2">
            <span className="font-bold">MON-FRI</span> 09:00 – 18:00 <br />
            <span className="font-bold">SAT-SUN</span> 10:00 – 14:00
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#023047]">Contact Info</h3>
          <p className="text-sm text-gray-700 mt-2">
            <span className="font-bold">Phone:</span> 01304999.. <br />
            <span className="font-bold">Email:</span> email@email.com
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#023047]">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-3 text-red-600 text-xl">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Form */}
        <div className="bg-[#fff5ed] border-2 border-orange-400 rounded-md shadow p-6 w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-[#023047] mb-6">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:border-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold rounded-full px-8 py-2 hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={dogCatimg}
            alt="Dog and Cat"
            className="w-80 object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
