import React from "react";

const AllProdect = ({ simpoledata }) => {
    const {providerName,image,description} =simpoledata;
  return (
    <div>
      <div className="card bg-base-100 w-96 h-[400px] shadow-sm">
        <figure>
          <img className="w-[500px] h-[400px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{providerName}</h2>
          <p>
            {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProdect;
