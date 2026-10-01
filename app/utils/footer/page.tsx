export default function Footer() {
    const eventCategories = [
        "Festival & Celebration",
        "Music & Concert",
        "Comedy Show",
        "Theatre & Arts",
        "Sports & Fitness",
        "Workshops & Learning",
        "Fashion & Lifestyle",
        "Kids & Family",
        "Cultural",
        "Entertainment",
        "Spiritual & Wellness",
        "Night Life & Parties",
    ];

    const topCities = [
        "Events in Mumbai",
        "Events in Delhi-NCR",
        "Events in Chennai",
        "Events in Bengaluru",
        "Events in Hyderabad",
        "Events in Pune",
        "Events in Ahmedabad",
        "Events in Kolkata",
        "Events in Kochi",
    ];

    const calendarEvents = [
        "Events happening Today",
        "Events happening Tomorrow",
        "Events happening This Weekend",
    ];

    const categories = [
        "Comedy Show",
        "Cultural",
        "Entertainment",
        "Fashion & Lifestyle",
        "Festival & Celebration",
        "Kids & Family",
    ];

    const company = [
        "About Us",
        "Showmates App",
        "List Your Show",
        "Explore",
        "Blogs",
        "FAQs",
    ];

    const legal = ["Privacy Policy", "Terms & Conditions"];

    return (
        // <footer className="bg-[#250C5A] text-white px-5 sm:px-8 lg:px-10 py-8 sm:py-10 overflow-hidden">
        // <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 sm:px-8 lg:px-10 py-8 sm:py-10 overflow-hidden">
            <footer className="bg-[#4C1D95] text-white px-5 sm:px-8 lg:px-10 py-8 sm:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Event Categories */}
                <div className="border-b border-white/20 pb-7 sm:pb-8">
                    <h3 className="font-bold text-base sm:text-lg mb-4">
                        More events in Ahmedabad
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {eventCategories.map((item) => (
                            <button
                                key={item}
                                className="border border-white/30 hover:border-white/70 hover:bg-white/10 transition rounded-full px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Top Cities */}
                <div className="border-b border-white/20 py-7 sm:py-8">
                    <h3 className="font-bold text-base sm:text-lg mb-4">
                        Events in top cities
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {topCities.map((item) => (
                            <button
                                key={item}
                                className="border border-white/30 hover:border-white/70 hover:bg-white/10 transition rounded-full px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Calendar */}
                <div className="border-b border-white/20 py-7 sm:py-8">
                    <h3 className="font-bold text-base sm:text-lg mb-4">
                        Book your calendar
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {calendarEvents.map((item) => (
                            <button
                                key={item}
                                className="border border-white/30 hover:border-white/70 hover:bg-white/10 transition rounded-full px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-8 sm:py-10">

                    {/* About */}
                    <div className="sm:col-span-2 lg:col-span-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Showmates
                        </h2>

                        <div className="space-y-3 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                            <p>
                                Showmates is built for how events actually work
                                today. It brings ticket sales, promotions, and
                                on-ground entry into one system, so organisers
                                don't have to manage everything separately.
                            </p>

                            <p>
                                From creating a simple ticket link to tracking
                                sales in real time, it gives organisers better
                                control without adding complexity. Features like
                                QR-based entry, promo tools, and affiliate
                                tracking help events run smoother and sell faster.
                            </p>

                            <p>
                                For attendees, it's straightforward — quick
                                booking, transparent pricing, and a smooth entry
                                experience without unnecessary steps.
                            </p>

                            <a
                                href="mailto:info@dhaval.in"
                                className="inline-block text-white hover:text-white/70 transition pt-1"
                            >
                                info@dhaval.in
                            </a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold mb-4">
                            Categories
                        </h2>

                        <ul className="space-y-2 text-sm sm:text-base text-white/80">
                            {categories.map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-white cursor-pointer transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold mb-4">
                            Company
                        </h2>

                        <ul className="space-y-2 text-sm sm:text-base text-white/80">
                            {company.map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-white cursor-pointer transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold mb-4">
                            Legal
                        </h2>

                        <ul className="space-y-2 text-sm sm:text-base text-white/80">
                            {legal.map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-white cursor-pointer transition"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 pt-5">
                    <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
                        © 2026 Dhaval. All Rights Reserved
                    </p>

                    {/* Brand */}
                    {/* <div className="text-center text-[clamp(3.5rem,13vw,9rem)] leading-none font-black bg-gradient-to-r from-[#46198B] to-[#250C5A] bg-clip-text text-transparent uppercase mt-8 select-none">
                        Garbawala
                    </div> */}
                    <div className="text-center text-[clamp(3.5rem,13vw,9rem)] leading-none font-black bg-gradient-to-r from-[#ffffff] to-[#f3f2f1] bg-clip-text text-transparent uppercase mt-8 select-none">
                        EventWala
                    </div>
                </div>
            </div>
        </footer>
    );
}
