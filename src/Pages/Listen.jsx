import React from "react";
import dog from "../assets/Dog.jpg";
import { Link } from "react-router";

const Listen = () => {
  return (
    <div data-aos="fade-right" className="lg:flex w-11/12 mx-auto items-center justify-end">
      <img className="w-[500px] h-[400px]" src={dog} alt="" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          Dogs do speak, but only to those who know how to listen.
        </h2>
        <p className="text-gray-600">
          Sweet roll ice cream powder candy canes ice cream donut pudding <br />
          biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding <br />
          fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding biscuit <br />
          caramels topb
        </p>
        <Link to="/prodect" className="bg-amber-300 text-center rounded-2xl text-[18px] px-4 py-3">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Listen;
