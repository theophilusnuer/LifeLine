import PharmaCard from "../../components/pharmaCard";



export default function Pharmaceuticals({ items, addToCart }) {

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map(item => (
                    <PharmaCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}