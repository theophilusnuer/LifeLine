import LabCard from "../../components/labCard";
import labData from "../../components/rawData/lab";



export default function Laboratory() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {labData.map(card => (
                    <LabCard
                        image={card.image}
                        name={card.name}
                        location={card.location}
                        hours={card.hours}
                        contact={card.contact}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    );
}