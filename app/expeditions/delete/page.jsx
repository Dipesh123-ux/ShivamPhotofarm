"use client";
import React, { useState, useEffect } from "react";
import { getAllStories } from "@/app/actions/getStories";
import ExpeditionItem from "@/components/Expeditions/ExpeditionItem";
import { deleteStoryById } from "@/app/actions/getStories";

const ExpeditionList = () => {
  const [expeditions, setExpeditions] = useState([]);

  const fetchExpeditions = async () => {
    try {
      const response = await getAllStories();
      setExpeditions(response.stories);
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleDelete = async (id) =>{
      await deleteStoryById(id);
      fetchExpeditions();
  }

  useEffect(() => {
    fetchExpeditions();
  }, []);

  console.log(expeditions)

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {expeditions.map((expedition) => (
         <ExpeditionItem key={expedition.id} story={expedition} deleteButton={true} onDelete={handleDelete} />
      ))}
      </div>
  )
};

export default ExpeditionList;