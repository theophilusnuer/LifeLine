import { useState } from "react";
import Footer from "../../components/footer";
import HeroSlider from "../../components/hero";
import Navbar from "../../components/navbar";
import TabsComponent from "../../components/tabs";
import pharmaData from "../../components/rawData/pharma";



export default function LandingPage (){
   const [cartItems, setCartItems] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');

   // Function to handle adding items to the cart
   const addToCart = (item) => {
     setCartItems(prevItems => [...prevItems, item]);
   };
//Function to filter data and search
const filteredItems = pharmaData.filter(item =>
   item.title.toLowerCase().includes(searchQuery.toLowerCase())
 );
return(
   <div>
    <Navbar cartItemsCount={cartItems.length}/>
    <HeroSlider/>
    <TabsComponent addToCart={addToCart}/>
    <Footer/>
   </div>
);
}