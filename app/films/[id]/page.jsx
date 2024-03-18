import React from "react";
import FilmDetails from "@/components/Films/filmDetails.jsx";
const filmDetail = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <FilmDetails id={id} />
    </div>
  );
};

export default filmDetail;
