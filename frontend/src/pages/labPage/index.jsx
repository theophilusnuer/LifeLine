import Footer from "../../components/footer";
import LabCard from "../../components/labCard";
import Navbar from "../../components/navbar";
import labData from "../../components/rawData/lab";



export default function LabPage(items) {
    return (
        <section>
            <Navbar/>
            <div className="container mx-auto my-14 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {labData.map(card => (
                    <LabCard
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
        <Footer/>
        </section>
    );
}