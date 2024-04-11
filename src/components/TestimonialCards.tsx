"use client"

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const MusicTestimonials = [
    {
        "name": "Emily Johnson",
        "title": "Piano Enthusiast",
        "quote": "I've always wanted to learn piano, but never found the time until I discovered this academy. The lessons are easy to follow, and I'm making progress faster than I ever thought possible!"
    },
    {
        "name": "David Smith",
        "title": "Guitar Novice",
        "quote": "As a beginner guitarist, I was intimidated by the thought of learning online. But this academy's structured approach and supportive community have made the process enjoyable and rewarding."
    },
    {
        "name": "Sarah Lee",
        "title": "Violin Lover",
        "quote": "The instructors here truly care about their students' progress. Their personalized feedback has helped me refine my technique and grow as a violinist."
    },
    {
        "name": "Michael Chen",
        "title": "Drum Enthusiast",
        "quote": "I've been drumming for years, but I wanted to take my skills to the next level. This academy's advanced courses have challenged me in all the right ways, and I'm seeing improvement with every lesson."
    },
    {
        "name": "Olivia Brown",
        "title": "Singing Beginner",
        "quote": "I've always loved to sing, but I never had the confidence to pursue it seriously. Thanks to the supportive environment and expert guidance at this academy, I'm gaining the skills and confidence to perform in front of others."
    },
    {
        "name": "Daniel Rodriguez",
        "title": "Bass Guitar Fanatic",
        "quote": "The instructors at this academy are not only talented musicians but also excellent teachers. Their passion for music is contagious, and I'm constantly inspired to improve and explore new genres."
    },
    {
        "name": "Sophia Patel",
        "title": "Flute Aficionado",
        "quote": "I've been playing the flute for years, but I wanted to deepen my understanding of music theory. The academy's comprehensive curriculum has broadened my musical horizons and enhanced my playing abilities."
    },
    {
        "name": "Jacob Nguyen",
        "title": "Keyboard Maestro",
        "quote": "The flexibility of online learning allows me to fit lessons into my busy schedule. Plus, the academy's vast library of resources ensures that there's always something new to learn and explore."
    }
]


function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items.center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={MusicTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards