import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div className="bg-green-50 w-80 shadow-lg shadow-green-800 rounded-xl p-5 border border-gray-200">
        <h3 className="text-3xl font-semibold mt-4 text-green-500">
                {item.itemName} 
        </h3>
            
            <div className="flex items-center mt-2 space-x-2 ">
                        <label className="text-green-300 font-semibold">Category:</label>
                        <p>{item.category}</p>
            </div>
            <div className="flex items-center mt-2 space-x-2 ">
                        <label className="text-green-300 font-semibold">Quantity:</label>
                        <p>{item.quantity}</p>
            </div>
            <div className="flex items-center mt-2 space-x-2 ">
                        <label className="text-green-300 font-semibold">Price:</label>
                        <p>Rs.{item.price}</p>
            </div>


        
    </div>
  )
}

export default ItemCard