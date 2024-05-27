import React from 'react';
import surgicalData from '../../components/rawData/surgical';
import SurgicalCard from '../../components/surgicalCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function SurgicalPage() {
    return (
        <section>
            <Navbar />
            <div className="container mx-auto my-14 p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {surgicalData.map(card => (
                        <SurgicalCard
                            key={card.id}
                            id={card.id}
                            image={card.image}
                            name={card.name}
                            location={card.location}
                            hours={card.hours}
                            contact={card.contact}
                            price={card.price}
                            review1={card.review1}
                            review2={card.review2}
                            review3={card.review3}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
}
