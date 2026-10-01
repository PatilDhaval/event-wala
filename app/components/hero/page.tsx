"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const events = [
        {
            name: "Maa na Garba",
            price: 120,
            date: "Sunday 11 Oct 2026",
            tagLine : "Navratri 2026",
            description:
                "Experience an unforgettable night of Garba, music, lights and celebration.",
            imageUrl:
                "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fweb-banner-images%2Fevent-banner-1787993432377-1.webp&w=1200&q=65",
        },
        {
            name: "Garba Night",
            price: 150,
            date: "Monday 12 Oct 2026",
            tagLine : "Navratri 2025",
            description:
                "Dance to traditional Garba beats and celebrate Navratri with your loved ones.",
            imageUrl:
                "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fweb-banner-images%2Fevent-banner-1787308645856-1.webp&w=1200&q=65",
        },
    ];

    const [current, setCurrent] = useState(0);

    // Automatic carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % events.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [events.length]);

    // Next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % events.length);
    };

    // Previous slide
    const previousSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? events.length - 1 : prev - 1
        );
    };

    const event = events[current];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="relative  mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-200">

                {/* Hero Content */}
                <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[520px]">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16 pr-16 sm:pr-20 md:pr-16">

                        {/* Badge */}
                        <span className="w-fit bg-purple-200 text-purple-700 px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
                            ✨ {event.tagLine}
                        </span>

                        {/* Title */}
                        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                            {event.name}
                        </h1>

                        {/* Date */}
                        <p className="mt-4 text-base sm:text-lg lg:text-xl text-purple-700 font-semibold">
                            {event.date}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg">
                            {event.description}
                        </p>

                        {/* Price */}
                        <p className="mt-5 text-xl sm:text-2xl font-bold text-gray-800">
                            Starting from ₹{event.price}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <button
                                onClick={() =>
                                    console.log("Book:", event.name)
                                }
                                className="w-full sm:w-auto bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Book Now
                            </button>

                            <button
                                onClick={() =>
                                    console.log("Read:", event.name)
                                }
                                className="w-full sm:w-auto border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
                            >
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[380px] md:h-auto">
                        <img
                            src={event.imageUrl}
                            alt={event.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* =========================
                    RIGHT SIDE CONTROLS
                ========================== */}
                <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">

                    {/* Previous */}
                    <button
                        onClick={previousSlide}
                        aria-label="Previous slide"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white text-purple-700 rounded-full shadow-lg flex items-center justify-center text-2xl sm:text-3xl font-semibold transition hover:scale-105 active:scale-95"
                    >
                        ↑
                    </button>

                    {/* Dots */}
                    <div className="flex flex-col items-center gap-2 py-1">
                        {events.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`rounded-full transition-all ${
                                    current === index
                                        ? "h-7 w-2.5 bg-purple-700"
                                        : "h-2.5 w-2.5 bg-white/90"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white text-purple-700 rounded-full shadow-lg flex items-center justify-center text-2xl sm:text-3xl font-semibold transition hover:scale-105 active:scale-95"
                    >
                        ↓
                    </button>
                </div>
            </div>
        </section>
    );
}
