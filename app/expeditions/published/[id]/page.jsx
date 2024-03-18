import React from "react";
import { getPublishedStoryById } from "@/app/actions/getStories";
import SingleExpedition from "@/components/Expeditions/SingleExpedition";


const page = async ({ params }) => {
  const PublishedStory = await getPublishedStoryById(params.id);

  if (!PublishedStory.response) {
    return <div>No Expedition were found</div>;
  }

  return (
    <div>
        <SingleExpedition PublishedStory={PublishedStory.response} />
    </div>
  )
};

export default page;
