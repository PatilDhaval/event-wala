import Artist from "./components/artist/page";
import Hero from "./components/hero/page";
import PopularEvents from "./components/popularEvents/page";
import Banner from "./utils/banner/page";
import Footer from "./utils/footer/page";
import Navbar from "./utils/navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularEvents />

      <Banner title="Navratri 2k26"
      description="Hello, wel-come to the event this event host by dhaval" 
      logoOne="https://cdn.vectorstock.com/i/1000v/04/90/instagram-logo-social-media-icon-vector-46180490.jpg"
      logoTwo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0Vcz5KQZP7RSGLUNIqHtv5nHo81kpx2d7po4IQvaaQ&s=10" />

      <Artist />
      <Footer />            
    </>
  );
}
