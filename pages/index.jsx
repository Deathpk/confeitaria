import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import AboutUs from "../components/AboutUs";
import Testimonals from "../components/Testimonals";

export default function Home() {
  return (
      <div>
        <title>Confeitaria</title>
        <Hero />
        <Catalog/>
        <AboutUs/>
        <Testimonals/>
      </div>
  )
}