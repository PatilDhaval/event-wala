"use client";

import { useEffect, useState } from "react";

export default function Artist() {
    const artists = [
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Aishwarya Majmudar",
            description: "Singer",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Arijit Singh",
            description: "Singer",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Neha Kakkar",
            description: "Singer",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Darshan Raval",
            description: "Singer",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Jubin Nautiyal",
            description: "Singer",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "King",
            description: "Rapper",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Badshah",
            description: "Rapper",
        },
        {
            imgUrl: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fartist-images%2Fartists%2Fevent-artist-1790168994835.webp&w=128&q=65",
            name: "Diljit Dosanjh",
            description: "Singer",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleItems(2);
            } else if (window.innerWidth < 1024) {
                setVisibleItems(3);
            } else {
                setVisibleItems(5);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Maximum slide position
    const maxIndex = Math.max(
        artists.length - visibleItems,
        0
    );

    const nextArtist = () => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) {
                return prev;
            }

            return prev + 1;
        });
    };

    const prevArtist = () => {
        setCurrentIndex((prev) => {
            if (prev <= 0) {
                return 0;
            }

            return prev - 1;
        });
    };

    return (
        <section className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold">
                            Events by Artist
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 mt-1">
                            Discover events from your favourite artists
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevArtist}
                            disabled={currentIndex === 0}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            ←
                        </button>

                        <button
                            onClick={nextArtist}
                            disabled={currentIndex === maxIndex}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex} * ((100% - ${(visibleItems - 1) * 20}px) / ${visibleItems} + 20px)))`,
                        }}
                    >
                        {artists.map((artist, index) => (
                            <div
                                key={index}
                                className="shrink-0"
                                style={{
                                    width: `calc((100% - ${(visibleItems - 1) * 20}px) / ${visibleItems})`,
                                }}
                            >
                                {/* Image */}
                                <div className="aspect-square overflow-hidden rounded-full bg-gray-100">
                                    <img
                                        src={artist.imgUrl}
                                        alt={artist.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="text-center mt-4">
                                    <h2 className="font-semibold text-base sm:text-lg">
                                        {artist.name}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {artist.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
