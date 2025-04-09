import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Logo and tagline */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#003EA4]">Auction<span className='text-[#FFD337]'>Gallery</span></h2>
          <p className="text-gray-600">Bid. Win. Own.</p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#" className="hover:text-gray-600 transition">Auctions</a>
          <a href="#" className="hover:text-gray-600 transition">Categories</a>
          <a href="#" className="hover:text-gray-600 transition">How it works</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;