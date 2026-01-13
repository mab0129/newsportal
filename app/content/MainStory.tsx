import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


interface NewsRow {
  news_title: string
  news_details: string
  writer_name: string
  picture: string
  date_of_release: string
}

interface MainStoryProps {
  mainstory: NewsRow;
}


const MainStory = ({mainstory: newsItem}: MainStoryProps) => {
  
  // const { mainstory } = mainstory;
  const slug = newsItem.news_title
  .toLowerCase()
  .replace(/\s+/g, "-");

  console.log(newsItem.news_title)
  return (
    <Link href={`/content/${slug}`} className='m-3'>
      <div className="card rounded-2xl overflow-hidden shadow-lg m-5 grid lg:grid-cols-2 sm:grid-cols-1 justify-around content-center">
            <img className="" src={"/images/" + newsItem.picture} alt="Sunset in the mountains" />
            <div className="p-5 grid content-center">
                <div className="font-bold text-xl mb-4">{newsItem.news_title}</div>
                <p className="text-gray-300 text-base p-2">
                  {newsItem.news_details.length > 400
                  ? newsItem.news_details.slice(0, 400) + "..."
                  : newsItem.news_details}
                </p>
                <p className="text-gray-400 mt-5 p-2">Read more  <FontAwesomeIcon icon={faRightLong}/></p>
            </div>
        </div>
    </Link>
  )
}

export default MainStory
