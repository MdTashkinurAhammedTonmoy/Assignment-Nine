import React, { Suspense } from 'react';
import AllProdect from './AllProdect';
import { useLoaderData } from 'react-router';

const Prodect = () => {
    const data = useLoaderData();
    
    return (
        <div className='grid grid-cols-4 w-11/12 mx-auto py-10'>
            <Suspense fallback={<h3>Loding...</h3>}>
              {
                data.map((simpoledata) => <AllProdect key={simpoledata.serviceId} simpoledata={simpoledata}></AllProdect> )
              }
            </Suspense>
        </div>
    );
};

export default Prodect;