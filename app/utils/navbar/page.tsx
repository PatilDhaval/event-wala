"use client";

import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
            <nav className="mx-auto max-w-7xl rounded-2xl border border-purple-100 bg-white/95 shadow-[0_8px_30px_rgba(234,88,12,0.10)] backdrop-blur-md">

                <div className="flex min-h-16 items-center justify-between px-4 py-2 sm:min-h-[72px] sm:px-6">

                    {/* Logo */}
                    <a href="/"
                        className="group flex shrink-0 items-center gap-2"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-md shadow-purple-200 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                            <span className="text-xl">✦</span>
                        </div>

                        <div className="leading-none">
                            <h1 className="bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
                                Event-Wala
                            </h1>

                            <p className="mt-1 hidden text-[9px] font-semibold tracking-[0.2em] text-gray-400 sm:block">
                                FIND • DANCE • CELEBRATE
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 lg:flex">

                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                    index === 0
                                        ? "text-purple-500"
                                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-500"
                                }`}
                            >
                                {link.name}

                                {/* Active Indicator */}
                                {index === 0 && (
                                    <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-500" />
                                )}
                            </a>
                        ))}

                    </div>

                    {/* Right Actions */}
                    <div className="hidden items-center gap-2 lg:flex">

                        {/* Location */}
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 transition hover:border-purple-300 hover:bg-purple-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4 text-purple-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z"
                                />
                                <circle cx="12" cy="11" r="2.5" />
                            </svg>

                            <select
                                name="location"
                                className="cursor-pointer bg-transparent text-sm font-semibold text-gray-700 outline-none"
                                defaultValue="ahmedabad"
                            >
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="anand">Anand</option>
                            </select>
                        </div>

                        {/* List Event */}
                        {/* <button
                            type="button"
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-300"
                        > */}
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-xl bg-[#4C1D95] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-purple-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-300"
                        >
                            <span className="text-lg leading-none">+</span>
                            List Event
                        </button>

                        {/* Search */}
                        <button
                            type="button"
                            aria-label="Search"
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-purple-50 hover:text-purple-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0Z"
                                />
                            </svg>
                        </button>

                        {/* Profile */}
                        <button
                            type="button"
                            aria-label="Profile"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-500 transition hover:bg-purple-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Tablet / Mobile */}
                    <div className="flex items-center gap-1 lg:hidden">

                        {/* Search */}
                        <button
                            type="button"
                            aria-label="Search"
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0Z"
                                />
                            </svg>
                        </button>

                        {/* Menu Button */}
                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="border-t border-orange-100 px-4 pb-5 pt-3 lg:hidden">

                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                        index === 0
                                            ? "bg-orange-50 text-orange-500"
                                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Location */}
                        <div className="mt-3 flex items-center gap-3 rounded-xl bg-orange-50 p-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                                📍
                            </div>

                            <div className="flex-1">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                                    Your Location
                                </p>

                                <select
                                    className="w-full bg-transparent text-sm font-bold text-gray-700 outline-none"
                                    defaultValue="ahmedabad"
                                >
                                    <option value="ahmedabad">Ahmedabad</option>
                                    <option value="anand">Anand</option>
                                </select>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <button
                            type="button"
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-sm font-bold text-white shadow-md shadow-orange-200"
                        >
                            <span className="text-lg">+</span>
                            List Your Event
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
