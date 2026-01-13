"use client"; 
import React from 'react'
import Template from './Template'
import MainStory from './MainStory'

interface NewsRow {
  news_title: string
  news_details: string
  writer_name: string
  picture: string
  date_of_release: string
}

  interface HomePageProps {
  newsstories: NewsRow[]
}

const HomePage = ({newsstories}: HomePageProps) => {
  // console.log(newsstories[0].news_title)

  return (
    <div>
        <div className="grid justify-center content-center">
            <MainStory mainstory={newsstories[0]}/>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center content-center gap-4 mt-5'>
          {newsstories.length === 0 ? (
            <p>No news available.</p>
          ) : (
            newsstories.slice(1).map((news, index) => (
              <Template key={index} news={news} />
            ))
          )}
          
            
        </div>
    </div>
   
  )
}

export default HomePage

