"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateExpeditions = () => {
  const router = useRouter();

  const MakeNewStory = async () => {
    try {
      const response = await axios.post("/api/new-story");
      router.push(`/expeditions/create/${response.data.id}`);
    } catch (err) {
      console.log("Error creating story");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <button
        onClick={MakeNewStory}
        className="bg-black text-white font-semibold hover:text-white py-2 px-4 transition duration-300 focus:outline-none m-4"
      >
        Create Expeditions
      </button>
      <Link
        href="/expeditions/delete"
        className="bg-black text-white font-semibold hover:text-white py-2 px-4 transition duration-300 focus:outline-none"
      >
        Delete Expeditions
      </Link>
    </div>
  );
};

export default CreateExpeditions;
