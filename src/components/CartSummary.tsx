import { useCart } from "../context/CartContext"
import { confirmAlert } from "react-confirm-alert"
import { CustomPurchaseAlert } from "./CustomPurchaseAlert"

export default function CartSummary() {
  const { getTotalPrice, cart, removeFromCart } = useCart()
  const totalPrice = getTotalPrice()

  const handlePurchase = () => {
    if (cart.length === 0) {
      alert("Il carrello è vuoto! Aggiungi prodotti prima di procedere all'acquisto.")
      return
    }

    // Non è più necessario setShowConfetti(true) qui, CustomPurchaseAlert lo gestirà internamente
    // setShowConfetti(true);

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomPurchaseAlert
            title="Iper Store"
            message="Acquisto simulato completato! Grazie per il tuo ordine."
            onClose={onClose} // Passa la funzione di chiusura fornita da react-confirm-alert
            onConfirm={() => {
              // Questa funzione viene chiamata quando l'utente clicca "OK" nel tuo alert personalizzato
              cart.forEach((item) => removeFromCart(item.id)) // Svuota il carrello
              // Non è più necessario setShowConfetti(false) qui
            }}
            // Rimuovi la prop showConfetti={showConfetti}
          />
        )
      },
      closeOnClickOutside: false,
      closeOnEscape: false,
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Rimuovi il componente Confetti da qui */}
      {/* {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />} */}
      <h2 className="text-2xl font-bold text-black mb-4">Riepilogo Carrello</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg text-black">Totale Prodotti ({cart.length} articoli):</span>
        <span className="text-xl font-bold text-green-700">€{totalPrice.toFixed(2)}</span>
      </div>
      <button
        className="w-full bg-green-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={cart.length === 0}
        onClick={handlePurchase}
      >
        Procedi all'Acquisto
      </button>
      {cart.length === 0 && <p className="text-center text-gray-500 mt-4">Il carrello è vuoto.</p>}
    </div>
  )
}