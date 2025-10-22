import React from 'react';
import daycare from "../assets/daycare.jpg"
import grooming from "../assets/grooming.jpg"
import healthcare from "../assets/healthcare.jpg"
import hyginc from "../assets/hyginc care.jpg"

const Category = () => {
    return (
        <div data-aos="fade-left" className='w-11/12 mx-auto py-12'>
            <h3 className='text-2xl font-bold mb-3'><span className='border-b-2 border-amber-300'>Services</span> Category</h3>
            <div className='flex gap-10'>
                <div className='p-10 rounded-[10px] hover:scale-105 shadow-lg duration-500 border border-gray-200 bg-amber-50 flex flex-col text-center gap-3'>
                    <img className='w-[100px] h-[100px]' src={daycare} alt="" />
                    <p className='font-semibold'>Daycare</p>
                </div>
                <div className='p-10 rounded-[10px] hover:scale-105 shadow-lg duration-500 border border-gray-200 bg-indigo-50 flex flex-col text-center gap-3'>
                    <img className='w-[100px] h-[100px]' src={grooming} alt="" />
                    <h4 className='font-semibold'>Grooming</h4>
                </div>
                <div className='p-10 rounded-[10px] hover:scale-105 shadow-lg duration-500 border border-gray-200 bg-amber-50 flex flex-col text-center gap-3'>
                    <img className='w-[100px] h-[100px]' src={healthcare} alt="" />
                    <h4 className='font-semibold'>Healthcare</h4>
                </div>
                <div className='p-10 rounded-[10px] hover:scale-105 shadow-lg duration-500 border border-gray-200 bg-indigo-50 flex flex-col text-center gap-3'>
                    <img className='w-[100px] h-[100px]' src={hyginc} alt="" />
                    <h4 className='font-semibold'>Hyginc</h4>
                </div>
            </div>
        </div>
    );
};

export default Category;