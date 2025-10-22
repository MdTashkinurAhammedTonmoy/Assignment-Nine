import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/pet-5.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      offset: 100, // trigger point
      once: true, // animate only once
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-10 py-12">
      {/* Text Section */}
      <div data-aos="fade-right">
        <h2 className="font-semibold text-3xl mb-4">About Us</h2>
        <div className="text-gray-600 flex flex-col gap-4 leading-relaxed">
          <p>
            At our core, we understand that pets are far more than just animals;
            they are beloved members of your family, loyal companions who bring
            joy, comfort, and unconditional love into your life. Every wag of a
            tail or gentle purr reflects the deep bond we share with them. That
            is why our mission goes beyond simply selling pet products — it’s
            about helping you nurture a relationship built on care, trust, and
            happiness.
          </p>
          <p>
            Our goal is to provide you with the highest quality pet essentials
            that ensure your furry friends live healthy, active, and fulfilling
            lives. From wholesome, nutrient-rich food that supports their growth
            and vitality to soft, cozy beds that give them the rest they
            deserve, we focus on combining comfort with functionality. Every
            product we offer is thoughtfully selected, tested, and designed to
            meet the unique needs of different pets — whether it’s an energetic
            puppy, a playful kitten, or a gentle senior companion.
          </p>
          <p>
            We believe that every pet deserves a lifestyle filled with joy,
            play, and love. That’s why we also offer a wide variety of toys that
            stimulate their minds and keep them entertained, along with grooming
            supplies that maintain their hygiene and enhance their well-being.
            Each item in our collection is chosen with your pet’s happiness in
            mind — because we know that a healthy pet is a happy pet.
          </p>
          <p>
            Beyond products, we aim to be a trusted partner for pet parents. Our
            team of passionate animal lovers is dedicated to sharing helpful
            advice, training tips, and care guides to support you every step of
            the way. We continuously learn, innovate, and adapt to provide
            modern solutions for everyday pet care challenges.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center" data-aos="fade-left">
        <img
          className="rounded-[10px] w-[1500px] h-[500px] object-cover transition-transform duration-500 hover:scale-105 shadow-lg"
          src={image}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;
