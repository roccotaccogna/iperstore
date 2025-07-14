import { useState } from "react"
import type { Product } from "../lib/types"
import { useCart } from "../context/CartContext"
import { MinusCircle, PlusCircle } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [itemQuantity, setItemQuantity] = useState(1) // Stato per la quantità da aggiungere

  const handleAddToCart = () => {
    if (itemQuantity > 0) {
      addToCart(product, itemQuantity)
      setItemQuantity(1) // Resetta la quantità a 1 dopo l'aggiunta
    }
  }

  const handleQuantityChange = (amount: number) => {
    setItemQuantity((prev) => Math.max(1, prev + amount)) // Assicura che la quantità sia almeno 1
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">Prezzo per {product.unit}</p>
        </div>
        {/* Modifiche per il layout responsive: flex-col di default, sm:flex-row su schermi più grandi */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto gap-3 sm:gap-0">
          <span className="text-xl font-bold text-green-700 mb-2 sm:mb-0">€{product.price.toFixed(2)}</span>
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="text-green-700 hover:text-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={itemQuantity <= 1}
              aria-label={`Diminuisci quantità di ${product.name}`}
            >
              <MinusCircle className="w-6 h-6" />
            </button>
            <span className="text-black font-medium">{itemQuantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="text-green-700 hover:text-green-800"
              aria-label={`Aumenta quantità di ${product.name}`}
            >
              <PlusCircle className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors text-sm font-medium w-full sm:w-auto mt-3 sm:mt-0"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  )
}


