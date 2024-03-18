"use server";
import prisma from "@/prismadb";

export const getStoryById = async (storyId) => {
  if (!storyId) {
    throw new Error("Do not have storyId");
  }

  try {
    const StoryById = await prisma.story.findUnique({
      where: {
        id: storyId,
        publish: false,
      },
    });

    return { response: StoryById };
  } catch (error) {
    console.log(error);
    return { error: "Error on getting the story by Id" };
  }
};

export const getPublishedStoryById = async (storyId) => {
  if (!storyId) {
    throw new Error("Do not have storyId");
  }

  try {
    const StoryById = await prisma.story.findUnique({
      where: {
        id: storyId,
        publish: true,
      },
    });

    return { response: StoryById };
  } catch (error) {
    return { error: "Error on getting the story by Id" };
  }
};

export const getAllStories = async () => {
  try {
    const AllStories = await prisma.story.findMany({
      where: {
        publish: true,
      },
    });
    return { stories: AllStories };
  } catch (error) {
    return { stories: [] };
  }
};

export const deleteStoryById = async (storyId) => {
  if (!storyId) {
    throw new Error("Do not have storyId");
  }

  try {
    const deletedStory = await prisma.story.delete({
      where: {
        id: storyId,
      },
    });

    return { response: deletedStory };
  } catch (error) {
    console.log(error);
    return { error: "Error deleting the story by Id" };
  }
};