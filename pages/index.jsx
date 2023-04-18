import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import AboutUs from "../components/AboutUs";
import Testimonals from "../components/Testimonals";
import Contacts from "../components/Contacts";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const { 
    cart,
    isCartOpen, 
    handleCartDisplay, 
    changeQuantity, 
    finishOrder, 
    totalValue 
  } = useContext(CartContext);

  return (
      <div>
        <title>Confeitaria</title>
        <Navbar/>
        <CartDrawer 
          cart={cart} 
          isOpen={isCartOpen} 
          onCartDisplayChange={handleCartDisplay}
          onProductQuantityChange={changeQuantity}
          onOrderFinish={finishOrder}
          totalValue={totalValue}
        />
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