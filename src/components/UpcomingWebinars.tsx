"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {

  const featuredWebinars = [
    {
      "id": 1,
      "title": "Guitar Fundamentals",
      "slug": "guitar-fundamentals",
      "description": "Learn the basics of playing guitar with our complete beginner's course.",
      "isFeatured": true,
  },
  {
      "id": 2,
      "title": "Piano Essentials",
      "slug": "piano-essentials",
      "description": "Master the fundamentals of playing piano with our comprehensive beginner's guide.",
      "isFeatured": true,
  },
  {
      "id": 3,
      "title": "Violin Basics",
      "slug": "violin-basics",
      "description": "Discover the world of violin playing from scratch, with easy-to-follow lessons.",
      
      "isFeatured": false,
      
  },
  {
      "id": 4,
      "title": "Drum Mastery",
      "slug": "drum-mastery",
      "description": "Unlock your rhythm potential with our intensive drumming course suitable for all levels.",
      
      "isFeatured": true,
  },
  {
      "id": 5,
      "title": "Flute Foundations",
      "slug": "flute-foundations",
      "description": "Embark on a melodic journey with our beginner's guide to playing the flute.",
      
      "isFeatured": false,
  },
  {
      "id": 6,
      "title": "Saxophone Express",
      "slug": "saxophone-express",
      "description": "Learn to play the saxophone with style and finesse in our dynamic course.",
      "isFeatured": true,
  },
  {
      "id": 7,
      "title": "Trumpet Techniques",
      "slug": "trumpet-techniques",
      "description": "Master the art of playing the trumpet with expert techniques and exercises.",
      "isFeatured": false,
  }
  ]

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide">Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhanced Musical Journey</p>
            </div>

            <div className="mt-10">
              <HoverEffect 
              items={featuredWebinars.map( (webinar) => (
                {
                  title: webinar.title,
                  description: webinar.description,
                  link: '/' 
                }
              ))}
              />
            </div>

            <div className="mt-10 text-center">
              <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View All webinars
              </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars