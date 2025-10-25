import React, { Suspense } from "react";
import AllProdect from "./AllProdect";
import { useLoaderData } from "react-router";

const Prodect = () => {
  const data = useLoaderData();

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-10 justify-items-center">
      <Suspense fallback={<h3>Loading...</h3>}>
        {data.map((simpoledata) => (
          <AllProdect key={simpoledata.serviceId} simpoledata={simpoledata} />
        ))}
      </Suspense>
    </div>
  );
};

export default Prodect;
