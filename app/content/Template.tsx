"use client"; 
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';


interface NewsRow {
  news_title: string
  news_details: string
  writer_name: string
  picture: string
  date_of_release: string
}


const Template = (news: NewsRow) => {
  const { news: newsItem } = news;
  const slug = newsItem.news_title
  .toLowerCase()
  .replace(/\s+/g, "-");
  
  return (
    <Link href={`/content/${slug}`} >
        <div className="card rounded-2xl overflow-hidden shadow-lg m-2 hover:animate-[slide_0.5s_ease-in-out_forwards]">
            <img className="w-full" src={"/images/" + newsItem.picture} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{newsItem.news_title.length > 40 ? newsItem.news_title.slice(0, 40) + "..." : newsItem.news_title }</div>
                <p className="text-gray-300 text-base">
                  {newsItem.news_details.length > 100
                  ? newsItem.news_details.slice(0, 100) + "..."
                  : newsItem.news_details}
                </p>
                <p className='text-gray-400 text-sm mt-4'>Read More <FontAwesomeIcon icon={faRightLong}/></p>
            </div>
           
        </div>
    </Link>
  )
}

export default Template
