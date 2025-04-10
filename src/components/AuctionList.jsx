import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AuctionList = () => {
  const handleAddNewItems = () => {
    toast("Item Added to your Favorite Lists");
  };
  const handleRemoveNewItems = () => {
    toast("Item Removed From Favorites");
  };

  const [bids, setBids] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, []);

  const toggleFavorite = (item) => {
    const isFavorited = favorites.find((fav) => fav.id === item.id);
    if (isFavorited) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const isFavorited = (id) => favorites.some((fav) => fav.id === id);

  const totalAmount = favorites.reduce(
    (acc, curr) => acc + curr.currentBidPrice,
    0
  );

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h2 className="text-2xl font-semibold text-blue-900 mb-1">
        Active Auctions
      </h2>
      <p className="text-gray-600 mb-6">
        Discover and bid on extraordinary items
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Auction Table */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-x-auto ">
          <div className="border rounded">
            
            <table className="w-full text-left ">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pl-4">Items</th>
                  <th className="py-2">Current Bid</th>
                  <th className="py-2">Time Left</th>
                  <th className="py-2 text-center">Bid Now</th>
                </tr>
              </thead>
              <tbody className="">
                {bids.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 flex items-center gap-3 pl-3">
                      <img
                        src={item.image}
                        className="w-12 h-12 object-cover rounded"
                        alt={item.title}
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-3">
                      ${item.currentBidPrice.toLocaleString()}
                    </td>
                    <td className="py-3">{item.timeLeft}</td>
                    <td className="py-3 text-center">
                      <button
                        className={`text-xl transition ${
                          isFavorited(item.id)
                            ? "text-red-500 cursor-not-allowed"
                            : "text-gray-400 hover:text-red-500 cursor-pointer"
                        }`}
                        onClick={() => {
                          if (isFavorited(item.id)) return;
                          toggleFavorite(item);
                          handleAddNewItems();
                        }}
                      >
                        {isFavorited(item.id) ? "❤️" : "♡"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Favorites Sidebar */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-4">
          <h3 className="text-[#003EA4] text-lg font-semibold mb-4 flex items-center gap-2 border-b">
            <span>♡</span> Favorite Items
          </h3>
          {/* Content */}
          {favorites.length === 0 ? (
            <div className="text-center py-6 space-y-1">
              <p className="text-lg text-gray-500">No favorites yet.</p>
              <p className="text-sm text-gray-400">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            <div className="space-y-4 ">
              {favorites.map((fav) => (
                <div
                  key={fav.id}
                  className="flex items-center justify-between border rounded p-4"
                >
                  <div className="flex items-center gap-3 ">
                    <img
                      src={fav.image}
                      className="w-10 h-10 rounded"
                      alt={fav.title}
                    />
                    <div className="text-sm">
                      <p className="font-medium truncate w-40">{fav.title}</p>
                      <p className="text-gray-500 text-xs">
                        ${fav.currentBidPrice.toLocaleString()} &nbsp; | &nbsp;
                        Bids: {fav.bidsCount}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-red-500 text-sm cursor-pointer"
                    onClick={() => {
                      removeFavorite(fav.id);
                      handleRemoveNewItems();
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t pt-4 font-semibold text-right text-lg">
            Total bids Amount: &nbsp;
            <span className="text-black">${totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuctionList;
