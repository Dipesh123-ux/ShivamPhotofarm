import React from 'react'
import details from '@/data/Films/details'
import Link from 'next/link'
const FilmDetails = ({ id }) => {
    const size = details.length;

    return (
        <div>
            <div className='text-center my-8'>

                <h1 className='text-2xl font-semibold font-sang'>{details[id].place}</h1>
                <h1 className='font-sang '>{details[id].name}</h1>
            </div>
            <div className="flex  justify-center h-[300px] sm:h-[500px] md:h-screen">
                <iframe
                    className="w-4/5 h-4/5  rounded-lg"
                    src={'https://www.youtube.com/embed/lCX9fgo5y-I'}
                    // src={`${youtube1.url}?rel=0`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
           
            <div class="md:-mt-20 mb-12 font-thin text-sm leading-6 text-center ">
                <p><strong className='font-ste'>Filmed By -</strong> {details[id].filmBy}</p>
                <p><strong className='font-ste'>Edited By -</strong> {details[id].editedBy}</p>
                <p><strong className='font-ste'>Shot By -</strong> {details[id].shot}</p>
            </div>
            <div className=' my-12 text-2xl  flex justify-center font-bold text-white '>
                <Link href={`/films/${id == size - 1 ? 0 : parseInt(id) + 1}`}>
                    <div className="cursor-pointer w-[115px] rounded-md h-[40px] bg-[black] flex justify-center items-center hover:bg-[#272727]">
                        <p className="text-white text-sm  font-semibold tracking-wider ">
                            NEXT FILM
                        </p>
                    </div>
                </Link>
            </div>

            <div className='flex  justify-center'>
                <div className='w-[1px]  mr-2 bg-black'></div>
                <div className='w-4/5 md:w-4/6  text-center leading-8 font-ste'>{details[id].description}</div>

            </div>
        </div>
    )
}

export default FilmDetails