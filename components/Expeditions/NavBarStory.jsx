'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'
import { getStoryById } from '@/app/actions/getStories'


const NavbarStory = ({storyId}) => {


    const router = useRouter()
    const [showPopup, setShowPopup] = useState(false)


    const PublishStory = async () => {
        try {
            const response = await axios.patch('/api/publish-new-story',{
                storyId
            })
            router.push('/expeditions')
        } catch (error) {
            console.log('Error publishing the story', error)
        }
    }
  return (
    <div className='px-8 py-2 border-b-[1px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
            </div>
            <div className='flex items-center space-x-7'>
            <button onClick={() => {setShowPopup(!showPopup)
            console.log('hello')}} className='flex items-center opacity-90 hover:opacity-100 duration-100 ease-in cursor-pointer bg-green-600 hover:bg-green-700 rounded-full px-3 py-1 text-[13px] text-white'>Publish</button>
            </div>
            
        </div>
        {showPopup && (
            <SaveStoryPopUp storyId={storyId} PublishStory={PublishStory} setShowPopUp={setShowPopup} />
        )}
    </div>
  )
}

export default NavbarStory


const SaveStoryPopUp = ({storyId,PublishStory,setShowPopUp}) => {
    const [Story, setStory] = useState()
    useEffect(() => {
        const fetchStoryById = async () => {
            try {
                console.log(storyId);
                const result = await getStoryById(storyId)
                console.log(result,"here")
                if(result.response){
                    setStory(result.response)
                }
            } catch (error) {
                console.log('Error fetching the story data', error)
            }
        }

        fetchStoryById()
    },[])


    if(!Story) return null

    // first 10 words for description

    const stripHtmlTags = (htmlString) => {
        return htmlString.replace(/<[^>]*>/g, '');
    };

    const contentWithoutH1 = Story.content?.replace(/<h1[^>]*>[\s\S]*?<\/h1>/g, '');

    const textWithoutHtml = stripHtmlTags(contentWithoutH1);

    const first10Words = textWithoutHtml.split(/\s+/).slice(0, 10).join(' ');

    // H1 tag for heading

    const h1match = Story.content?.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

    const h1Element = h1match ? h1match[1] : '';
    

    const h1elemntwithouttag = stripHtmlTags(h1Element)
    
    // imgage Src for Image preview

    const ImageMatch = Story.content?.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/);

    const imgSrc = ImageMatch ? ImageMatch[1] : ''
    return(
        <div className='fixed bg-gray-50 w-full z-20 overflow-auto top-0 left-0 right-0 bottom-0'>
            <span onClick={(e) => {e.preventDefault() ;setShowPopUp(false)}} className='absolute top-4 right-6 text-3xl cursor-pointer'>
                &times;
            </span>
            <div className='max-w-[900px] mx-auto md:mt-28 mt-10 grid md:grid-cols-2 grid-cols-1 gap-14'>
                <div className='max-md:hidden'>
                    <p className='font-semibold'>Story Preview</p>
                    <div className='w-full h-[250px] bg-gray-100 rounded my-3 border-b-[1px]'>
                        {imgSrc && (
                            <Image src={imgSrc} width={250} height={250} alt='Preview Image' className='w-full h-full object-cover'/>
                        )}
                    </div>
                    <h1 className='border-b-[1px] text-[18px] font-semibold py-2'>{h1elemntwithouttag}</h1>
                    <p className='border-b-[1px] py-2 text-sm text-neutral-500 pt-3'>{first10Words}</p>
                    <p className='font-medium text-sm pt-2'>Note: <span className='font-normal text-neutral-500'>Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.</span></p>
                </div>
                <div>
                    <button onClick={() => PublishStory()} className='px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white text-sm mt-8'>
                        Publish now
                    </button>
                </div>
            </div>
        </div>
    )
}