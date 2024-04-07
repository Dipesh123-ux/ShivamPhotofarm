import React from 'react'
import NewStory from './NewStory'
import NavBarStory from './NavBarStory'
import { getStoryById } from '@/app/actions/getStories'


const page = async ({ storyId }) => {

    const Story = await getStoryById(storyId);

  return (
    <div className='max-w-[1000px] mx-auto ' role='textbox' data-length>
        <NavBarStory storyId={storyId}  />
        <NewStory storyId={storyId} Storycontent={Story.response?.content}/>
    </div>
  )
}

export default page;




