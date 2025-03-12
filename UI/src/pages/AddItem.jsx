import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                ItemName: itemName,
                Category: category,
                Quantity: quantity,
                Price: price,
            };
    
            const res = await fetch("/api/addItem", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(formData), 
            });
    
            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.msg || "Error adding item");
            }
    
            alert("Item added successfully!");
            navigate('/home');
    
        } catch (err) {
            console.error(err);
            alert("Something went wrong: " + err.message);
        }
    };
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
        <div className='bg-white shadow-xl rounded-lg p-6 w-full max-w-md'>
            <h1 className="text-green-600 text-2xl font-semibold text-center mb-4">Add Item</h1>
            
                <form onSubmit={handleSubmit}>
                    <div className="mb-4" >
                        <label className="text-green-500 block">Item Name:</label>
                        <input 
                            type="text"
                            name='item'
                            className='w-full mt-1 border border-gray-300 rounded-lg px-4 py-2'
                            value={itemName}
                            onChange={(e)=>setItemName(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="text-green-500 block">Category:</label>
                        <input 
                            type="text"
                            name='category'
                            className='w-full mt-1 border border-gray-300 rounded-lg px-4 py-2'
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="text-green-500 block">Quantity:</label>
                        <input 
                            type="number"
                            name='quantity'
                            className='w-full mt-1 border border-gray-300 rounded-lg px-4 py-2'
                            value={quantity}
                            onChange={(e)=>setQuantity(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="text-green-500 block">Price:</label>
                        <input 
                            type="number"
                            name='item'
                            className='w-full mt-1 border border-gray-300 rounded-lg px-4 py-2'
                            onChange={(e)=>setPrice(e.target.value)}
                            required />
                    </div>
                    <button type="submit" className="bg-green-800 text-white font-medium py-2 px-6 rounded-lg">
                        Add Item
                    </button>
                </form>
            
        </div>
    </div>
  )
}

export default AddItem