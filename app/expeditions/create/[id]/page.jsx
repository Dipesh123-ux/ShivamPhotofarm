import React from "react";
import Expedition from "@/components/Expeditions/page";

const page = ({ params }) => {
  return <Expedition storyId={params.id} />;
};

export default page;
