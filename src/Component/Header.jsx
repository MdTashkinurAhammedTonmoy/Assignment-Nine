import React, { useState, useEffect } from "react";
import pet1 from "../assets/Pet-car-1.jpg";
import pet2 from "../assets/pet-car-2.jpg";
import pet3 from "../assets/pet-car-3.jpg";
import pet4 from "../assets/pet-car-4.jpg";

const Header = () => {
  const images = [pet1, pet2, pet3, pet4];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div data-aos="fade-left" className="relative w-11/12 mx-auto my-10 rounded-2xl  h-[80vh]  overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Pet winter outfit ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-16 left-10 bg-black bg-opacity-40 p-6 rounded-lg text-white max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Keep Your Pet Warm & Stylish
            </h2>
            <p className="text-lg md:text-xl">
              Explore our cozy winter outfits and accessories
            </p>
            <button className="mt-4 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md font-semibold">
              Shop Now
            </button>
          </div>
          {/* Snow overlay */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-snow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * -100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
