import React from "react";
import image from "../assets/image.png";

const Banner = () => {
  return (
    <div className="relative w-full ">
      {/* Background Image */}
      <img src={image} alt="Banner" className="w-full h-full object-cover" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-16 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bid on Unique Items from
          <br />
          Around the World
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-lg">
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition ">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
