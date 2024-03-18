import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";
import "highlight.js/styles/github.css";

const SingleExpedition = ({ PublishedStory }) => {
  const stripHtmlTags = (htmlString) => {
    return htmlString.replace(/<[^>]*>/g, "");
  };

  const h1match = PublishedStory?.content?.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

  const h1Element = h1match ? h1match[1] : "";

  const h1elemntwithouttag = stripHtmlTags(h1Element);

  const content = PublishedStory?.content;

  const firstH1Match = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/);

  const sanitizedContent = firstH1Match
    ? content.replace(firstH1Match[0], "")
    : content;

  const finalSanitizedContent = sanitizedContent.replace(
    /<h1[^>]*>[\s\S]*?<\/h1>|<select[^>]*>[\s\S]*?<\/select>|<textarea[^>]*>[\s\S]*?<\/textarea>/gi,
    ""
  );

  return (
    <>
      <div>
        <h1 className=" font-bold my-8 text-center font-sang text-wrap text-3xl">
          {h1elemntwithouttag}
        </h1>
        <div
          className="prose my-5 font-ste mx-3 md:mx-auto flex flex-col justify-center items-center"
          dangerouslySetInnerHTML={{ __html: finalSanitizedContent }}
        ></div>
      </div>
    </>
  );
};

export default SingleExpedition;
