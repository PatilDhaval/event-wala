export default function PopularEvents() {
    const events = [
        {
            image: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fveritical-images%2Fevent-vertical-banner-1790067705020-1.webp&w=384&q=65",
            date: "Sun 11 Oct - Tue 20 Oct | 8:00 PM",
            title: "Swarnim Nagari AC Dome Garba 2026",
            location: "Swarnim Nagari Garba, Ahmedabad",
            price: "₹ 300 onwards",
        },
        {
            image: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fveritical-images%2Fevent-vertical-banner-1787752527631-1.webp&w=384&q=65",
            date: "Sun 11 Oct - Tue 20 Oct | 8:00 PM",
            title: "Swarnim Nagari AC Dome Garba 2026",
            location: "Swarnim Nagari Garba, Ahmedabad",
            price: "₹ 300 onwards",
        },
        {
            image: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fveritical-images%2Fevent-vertical-banner-1789930423887-1.webp&w=384&q=65",
            date: "Sun 11 Oct - Tue 20 Oct | 8:00 PM",
            title: "Swarnim Nagari AC Dome Garba 2026",
            location: "Swarnim Nagari Garba, Ahmedabad",
            price: "₹ 300 onwards",
        },
        {
            image: "https://showmates.in/_next/image?url=https%3A%2F%2Fcdn.showmates.in%2Fstatic%2Fimages%2Fevent-images%2Fveritical-images%2Fevent-vertical-banner-1787308740556-1.webp&w=384&q=65",
            date: "Sun 11 Oct - Tue 20 Oct | 8:00 PM",
            title: "Swarnim Nagari AC Dome Garba 2026",
            location: "Swarnim Nagari Garba, Ahmedabad",
            price: "₹ 300 onwards",
        },
    ];

    return (
        <section className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold">
                            Popular Events
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 mt-1">
                            Popular events to attend with friends
                        </p>
                    </div>

                    <button className="w-fit bg-purple-800 hover:bg-purple-900 text-white px-5 py-2.5 rounded-lg">
                        View All Events
                    </button>
                </div>

                {/* Events */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {events.map((event, index) => (
                        <div key={index} className="overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                            {/* image */}
                            <img src={event.image} alt={event.title} className="w-full aspect-[3/4] object-cover" />

                            <div className="p-4">
                                <p className="text-xs sm:text-sm text-gray-500">{event.date}</p>
                                <p className="mt-2 text-base font-semibold line-clamp-2">{event.title}</p>
                                <p className="mt-1 text-sm text-gray-500 line-clamp-1">{event.location}</p>
                                <p className="mt-3 font-semibold text-purple-700">{event.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                

            </div>
        </section>
    );
}
