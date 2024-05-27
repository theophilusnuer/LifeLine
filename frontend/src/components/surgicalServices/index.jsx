import surgicalData from "../../components/rawData/surgical";
import SurgicalCard from "../../components/surgicalCard";


export default function Surgical(items) {
    return (
        <div className="container mx-auto p-4">
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
                    />
                ))}
            </div>
        </div>
    );
}