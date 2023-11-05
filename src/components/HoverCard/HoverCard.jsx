import React from '../HoverCard/HoverCard.css';

const HoverCard = () => {
    return (
      <div className="max-w-md rounded-md shadow-md mt-7 bg-gray-50 text-gray-800">
      <img src="https://i.ibb.co/RQ7t6vB/image2.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">Widest Variety. Custom Designed at Low MoQ</h2>
          <p className="text-gray-800">100% export oriented woven garment manufacturer and exporter. Now a days we have the capacity of production approx. 6000 pcs/day, Our factory space 79,200 sft. Per floor..</p>
        </div>
        <button type="button" className="text-white  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-medium px-5 py-2.5 ms-2 text-center mr-2 mb-5 dark:focus:ring-yellow-900">Read more</button>
      </div>
    </div>
    );
};

export default HoverCard;