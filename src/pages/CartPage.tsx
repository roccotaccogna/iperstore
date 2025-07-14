
import CartItemComponent from "../components/CartItem"
import CartSummary from "../components/CartSummary"
import { useCart } from "../context/CartContext" // Importa useCart dal nuovo contesto
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function CartPage() {
  const { cart } = useCart()

  useEffect(() => {
    console.log("CartPage renderizzato. Stato attuale del carrello:", cart)
  }, [cart])

  return (
    <main className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">Il Tuo Carrello</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-6">Il tuo carrello è vuoto.</p>
          <Link
            to="/"
            className="bg-green-700 text-white px-6 py-3 rounded-md text-lg hover:bg-green-800 transition-colors font-medium"
          >
            Torna allo Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      )}
    </main>
  )
}
