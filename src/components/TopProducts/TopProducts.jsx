import React from 'react';
//import Products from '../Products/Products';
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
//Discover our most popular and highly recommended products, handpicked based on customer ratings and reviews. 
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* Header section */}
        <div className='text-left mb-24 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>
                Top Rated Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>
            Discover the top-rated products tailored just for you! Our expertly curated selection features the highest-rated items, designed to meet your needs and exceed your expectations. From innovative gadgets to must-have essentials, each product has been chosen based on quality, performance, and customer satisfaction. Explore our top picks and find the perfect addition to your life today! </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
            {
                ProductsData.map((data)=>(
                    <div key={data.id}
                    data-aos="zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        {/* Image Section */}
                        <div className='h-[100px]'>
                            <img src={data.img} alt="" 
                            className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                        </div>
                        {/* Details Section */}
                        <div className='p-4 text-center'>
                          {/* star rating */}
                          <div className='w-full flex items-center justify-center gap-1 '>
                            <FaStar className='text-yellow-500 '/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                          </div>
                          <h1 className='text-xl font-bold dark:text-white'>{data.title}</h1>
                          <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>{data.description}</p>
                          <button 
                          className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                          onClick={handleOrderPopup}
                          >
                            Order Now</button>
                        </div>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  );
}

export default TopProducts;

