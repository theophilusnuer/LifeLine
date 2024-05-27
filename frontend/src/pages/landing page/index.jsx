import { useState } from "react";
import Footer from "../../components/footer";
import HeroSlider from "../../components/hero";
import Navbar from "../../components/navbar";
import TabsComponent from "../../components/tabs";
import pharmaData from "../../components/rawData/pharma";
import labData from "../../components/rawData/lab";
import surgicalData from "../../components/rawData/surgical";
import AboutUs from "../../components/aboutUs";



export default function LandingPage() {
   const [cartItems, setCartItems] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   

   // Function to handle adding items to the cart
   const addToCart = (item) => {
      setCartItems(prevItems => [...prevItems, item]);
   };
   //Function to filter data and search

   const handleSearch = (query) => {
      setSearchQuery(query);
   };
   const filteredPharmData = pharmaData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const filteredLabData = labData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const filteredSurgicalData = surgicalData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
   );
   // console.log('Pharma Data:', filteredPharmData);
   // console.log('Lab Data:', filteredLabData);
   // console.log('Surgical Data:', filteredSurgicalData);


   return (
      <div>
         <Navbar cartItemsCount={cartItems.length} onSearch={handleSearch} />
         <HeroSlider />
         <TabsComponent
            addToCart={addToCart}
            pharmaData={filteredPharmData}
            labData={filteredLabData}
            surgicalData={filteredSurgicalData}
         />
         <AboutUs/>
         <Footer />
      </div>
   );
}