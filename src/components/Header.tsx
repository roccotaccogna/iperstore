import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext" // Importa useCart dal nuovo contesto

export default function Header() {
  const { getCartItemCount } = useCart()
  const itemCount = getCartItemCount()

  return (
    <header className="bg-white shadow-sm py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
      <Link to="/" className="text-2xl md:text-3xl font-bold text-green-700">
        Iper Store
      </Link>
      <Link to="/cart" className="relative flex items-center text-black hover:text-green-700 transition-colors">
        <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" aria-label="Carrello" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Carrello</span>
      </Link>
    </header>
  )
}