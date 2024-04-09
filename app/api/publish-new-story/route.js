import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prismadb"

export async function PATCH(request) {
    const {storyId ,title} = await request.json()

    console.log(title,storyId)

    if(!storyId){
        throw new Error ('No storyId was found')
    }

    const story = await prisma.story.findUnique({
        where:{
            id:storyId
        }
    })
    
    if(!story){
        throw new Error('No Story were found')
    }

    try {
        const updatedStory = await prisma.story.update({
            where:{
                id:story.id
            },
            data:{
                publish:true,
                title
            }
        })
        return NextResponse.json(updatedStory)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }
}