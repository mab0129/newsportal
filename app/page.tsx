"use client"
import Image from "next/image";
import React from "react";
import { useState, useEffect } from 'react';
import Header from "./Header";
import HomePage from "./content/HomePage";
import Papa, { ParseResult } from "papaparse";

export default function Home() {

  interface NewsRow {
    news_title: string;
    news_details: string;
    writer_name: string;
    picture: string;
    date_of_release: string;
  }

  const [data, setData] = useState<NewsRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/news_data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse<NewsRow>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results: ParseResult<NewsRow>) => {
            setData(results.data);
            setLoading(false); 
            // console.log("Parsed data:", results.data);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV:", error);
        setLoading(false); 
      });
  }, []);

 if (loading && data.length === 0) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
}


  return (
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>  
          <Header/>
          <hr />
          <div className="">
            <HomePage newsstories={data} />
          </div>
        </>
      )}
        
      
    </main>
  );
}
