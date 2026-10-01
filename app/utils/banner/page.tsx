export default function Banner({
    title = "Get the Showmates App",
    description = "Book faster, track your tickets, and get live updates on the events you care about — all from your pocket.",
    logoOne = "https://showmates.in/_next/image?url=%2Fimages%2Fgoogle-paly-store.png&w=256&q=75",
    logoTwo = "https://showmates.in/_next/image?url=%2Fimages%2Fapp-store.png&w=256&q=75",
}) {
    return (
        <section className="w-full py-6 sm:py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-black text-white rounded-xl overflow-hidden flex flex-col md:flex-row md:justify-between md:items-center">

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-8 md:max-w-2xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            {title}
                        </h1>

                        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex items-center gap-3 p-5 sm:p-6 lg:p-8">
                        <a href="#" className="block">
                            <img
                                src={logoOne}
                                alt="Get it on Google Play"
                                className="w-32 sm:w-36 lg:w-40 h-auto"
                            />
                        </a>

                        <a href="#" className="block">
                            <img
                                src={logoTwo}
                                alt="Download on the App Store"
                                className="w-32 sm:w-36 lg:w-40 h-auto"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}