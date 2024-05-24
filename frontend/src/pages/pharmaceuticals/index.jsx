import PharmaCard from "../../components/pharmaCard";
import pharmaData from "../../components/rawData/pharma";



export default function Pharmaceuticals({ addToCart }) {

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {pharmaData.map(card => (
                <PharmaCard
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
                addToCart={addToCart}
                />
             ))}   
            </div>
        </div>
    );
}