import React from "react";
import { FaPlus } from "react-icons/fa6";
import defaultImage from "../assets/news.jpg";

const NewsCard = ({ title, description, src, url, pubDate, source }) => {
  return (
    <section className="p-5 relative">
      <div className="max-w-sm rounded overflow-hidden shadow-xl h-full  hover:shadow-2xl ">
        <div className="relative">
          <img
            className="w-full h-40 object-cover"
            src={src ? src : defaultImage}
            alt="News"
          />
          <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white py-1 px-3">
            <p className="text-xs">{source}</p>
          </div>
        </div>
        <div className="px-6 py-4 h-48">
          <div className="font-bold text-xl mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {title}
          </div>

          <p className="text-xs my-3">
            Published At: <span className="text-black">{pubDate}</span>
          </p>

          <p className="text-gray-700 text-base overflow-hidden h-20">
            {description}
          </p>
        </div>
        <div className="px-6 my-4 ">
          <a href={url} className="flex items-center text-blue-500">
            <FaPlus />
          <span className="space-x-5 ml-1">Read More</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
