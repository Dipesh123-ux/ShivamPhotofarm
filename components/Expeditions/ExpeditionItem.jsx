import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExpeditionItem = ({ key, story, deleteButton = false,onDelete }) => {
  const stripHtmlTags = (htmlString) => {
    return htmlString.replace(/<[^>]*>/g, "");
  };
  const match = story.content?.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/);
  const imgSrc = match ? match[1] : "";
  const h1match = story.content?.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

  const h1Element = h1match ? h1match[1] : "";
  const H1Element = stripHtmlTags(h1Element);

  const handleAction = () => {
     onDelete(story.id)
  };

  return (
    <div className="my-4 cursor-pointer">
      {deleteButton ? (
        <div className="relative cursor-pointer">
          <img
            src={imgSrc}
            alt={"Image"}
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {H1Element}
            </h2>
            <div
              className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300 hover:bg-red-600"
              onClick={handleAction}
            >
              Delete
            </div>
          </div>
        </div>
      ) : (
        <Link
          key={key}
          href={`/expeditions/published/${story.id}`}
          className="relative cursor-pointer"
        >
          <div className="relative cursor-pointer">
            <img
              src={imgSrc}
              alt={"Image"}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {story?.title}
              </h2>
              <div className="bg-white text-black py-2 px-4 rounded-full text-sm font-semibold transition duration-300 hover:bg-gray-300">
                View more
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ExpeditionItem;
