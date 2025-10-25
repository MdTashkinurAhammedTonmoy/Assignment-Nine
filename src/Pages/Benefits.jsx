import React from "react";
import dogCat from "../assets/Dog-ca t.jpg"; 

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center ">
        {/* Heading */}
        <div data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Benefits
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the key benefits of working with us — built on trust, care,
            and long-term support.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* Left Card */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-xl p-8 w-full md:w-1/3 flex flex-col items-center space-y-6
             shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out"
          >
            <div>
              <div className="text-red-500 text-4xl mb-2 text-center">❤️</div>
              <h3 className="font-semibold text-lg mb-1">Care & Compassion</h3>
              <p className="text-gray-500 text-sm">
                We provide care with dedication and genuine concern.
              </p>
            </div>

            <div>
              <div className="text-green-500 text-4xl mb-2 text-center">🌿</div>
              <h3 className="font-semibold text-lg mb-1">Eco Friendly</h3>
              <p className="text-gray-500 text-sm">
                Committed to sustainability and eco-friendly practices.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div data-aos="fade-down" className="flex justify-center">
            <img
              src={dogCat}
              alt="Main"
              className="rounded-full shadow-lg w-56 h-56 object-cover  transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Card */}
          <div
            data-aos="fade-left"
            className="bg-white shadow-lg hover:shadow-xl transform transition-all duration-500 ease-in-out rounded-xl p-8 w-full md:w-1/3 flex flex-col items-center space-y-6"
          >
            <div>
              <div className="text-yellow-400 text-4xl mb-2 text-center">
                🌟
              </div>
              <h3 className="font-semibold text-lg mb-1">Trusted Service</h3>
              <p className="text-gray-500 text-sm">
                Our reputation is built on consistent quality and reliability.
              </p>
            </div>

            <div>
              <div className="text-blue-500 text-4xl mb-2 text-center">💎</div>
              <h3 className="font-semibold text-lg mb-1">Quality Assured</h3>
              <p className="text-gray-500 text-sm">
                Each of our services is tested for top-notch quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
