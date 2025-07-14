import type { CartItem } from "../lib/types"
import { useCart } from "../context/CartContext" // Importa useCart dal nuovo contesto
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItem
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-100">
      <div className="relative w-24 h-24 sm:w-20 sm:h-20 mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-lg font-semibold text-black">{item.name}</h3>
        <p className="text-gray-600 text-sm">
          €{item.price.toFixed(2)} / {item.unit}
        </p>
        <div className="flex items-center justify-center sm:justify-start mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="text-green-700 hover:text-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={item.quantity <= 1}
            aria-label={`Diminuisci quantità di ${item.name}`}
          >
            <MinusCircle className="w-6 h-6" />
          </button>
          <span className="mx-3 text-black font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="text-green-700 hover:text-green-800"
            aria-label={`Aumenta quantità di ${item.name}`}
          >
            <PlusCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-end ml-0 sm:ml-4 mt-4 sm:mt-0">
        <span className="text-xl font-bold text-green-700 mb-2">€{(item.price * item.quantity).toFixed(2)}</span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-600"
          aria-label={`Rimuovi ${item.name} dal carrello`}
        >
          <Trash2 className="w-6 h-6" />
          <span className="sr-only">Rimuovi</span>
        </button>
      </div>
    </div>
  )
}
