import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import AboutUs from "../components/AboutUs";
import Testimonals from "../components/Testimonals";
import Contacts from "../components/Contacts";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <div>
        <title>Confeitaria</title>
        <Navbar/>
        <Hero />
        <Catalog/>
        <AboutUs/>
        <Testimonals/>
        <Contacts/>
        <ContactMe/>
        <Footer/>
      </div>
  )
}