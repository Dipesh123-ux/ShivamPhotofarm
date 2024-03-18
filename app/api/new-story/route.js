import { NextResponse,NextRequest } from "next/server";
import prisma from "@/prismadb";

export async function POST(request){
  try{
     const NewStory = await prisma.story.create({
      data : {}
     });
     return NextResponse.json(NewStory);
  }
  catch(err){
    console.log(err)
      return NextResponse.error()
  }
}

export async function PATCH(request){
  const body = await request.json()
 
  const {storyId, content} = body

  if(!storyId || !content){
      throw new Error('Missing fields')
  }


  const Story = await prisma.story.findUnique({
      where:{
          id:storyId
      }
  })

  if(!Story){
      throw new Error('No story were found')
  }

  try {
      await prisma.story.update({
          where:{
              id:Story.id,
          },
          data:{
              content
          }
      })

      return NextResponse.json('Successfully saved the story')
  } catch (error) {
      return NextResponse.error()
  }
}