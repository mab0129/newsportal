import Papa from "papaparse";
import { headers } from "next/headers";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Header from "@/app/Header";

interface NewsRow {
  news_title: string;
  news_details: string;
  writer_name: string;
  picture: string;
  date_of_release: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function NewsDetails({ params }: PageProps) {
  const headersList = await headers();
  const host = headersList.get("host");
  // const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/news_data.csv`);
  const csvText = await res.text();

  const { data } = Papa.parse<NewsRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const newsItem = data.find((item) => {
    const itemSlug = item.news_title
      .toLowerCase()
      .replace(/\s+/g, "-");

    return itemSlug === params.slug;
  });

  if (!newsItem) return <p>News not found</p>;

  return (
    <main>
      <Header/>
      <hr />
      <div className="mx-8">
      </div>
      <div className='m-5'>
        <Link className='text-gray-400 text-sm m-5 hover:text-gray-200' href='/'><FontAwesomeIcon icon={faLeftLong} /> Back</Link>
        <div className="card rounded-2xl overflow-hidden shadow-lg m-2 mx-5 grid grid-cols-1 justify-center">
          <div className="image m-5 max-w-250">
              <img className="w-full" src={"/images/" + newsItem.picture} alt="Sunset in the mountains" />
          </div>
          <div className="px-6 py-4">
              <div className="font-light text-sm text-gray-500 mb-2">Written by: {newsItem.writer_name}</div>
              <div className="font-bold text-xl mb-2">{newsItem.news_title}</div>
              <p className="text-gray-300 text-base">{newsItem.news_details}</p>
          </div>
        
        </div>
      </div>
    </main>
    
  );
}
