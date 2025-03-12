import React from 'react'
import { Link } from "react-router-dom";
import ItemGrid from '../components/ItemGrid'

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">
        <header className="bg-white shadow-md py-4 px-6 flex justify-end">
            <Link to="/add-item" className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md ">Add Item</Link>
        </header>
        <div>
            <ItemGrid isHome={true} />
        </div>
    </div>
  )
}

export default Home