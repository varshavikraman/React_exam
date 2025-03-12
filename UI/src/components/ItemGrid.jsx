import React,{useState ,useEffect} from 'react'
import ItemCard from './ItemCard'

const ItemGrid = ({isHome = true}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch("/api/getItemall");
                const data = await res.json();
                console.log("Fetched Items in Frontend:", data);
                setItems(data.allItem || []);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-green-500 text-2xl font-semibold text-center mb-6">
                {isHome ? "All Items" : "No Item Added"}
            </h1>

            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                    {items.map((item) => (
                        <ItemCard
                            key={item.itemName} 
                            item={item}
                        />
                    ))}
                </div>
            )}
    </div>
  )
}

export default ItemGrid