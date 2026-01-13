
import React from 'react';

const Header = () => {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  const day = weekday[d.getDay()];
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const fulldate =  date +'/' + month + '/' + year;

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 md:justify-between sm:justify-center content-center mb-2'>
      <div className=" md:grid sm:hidden"></div>
      <div className="grid justify-center content-center">
        <h1 className='logo'>Newspaper Logo</h1>
      </div>
      <div className="grid justify-end content-end text-sm text-gray-400">
        <p>Date: {fulldate}</p>
        <p>Day: {day}</p>
      </div>
    </div>
  )
}

export default Header
