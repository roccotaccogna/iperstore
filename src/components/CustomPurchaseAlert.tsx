import type React from "react"
import Confetti from "react-confetti" // Importa Confetti qui
import useWindowSize from "../hooks/useWindowSize" // Importa useWindowSize qui

interface CustomPurchaseAlertProps {
  title: string
  message: string
  onClose: () => void // Funzione fornita da react-confirm-alert per chiudere il modale
  onConfirm: () => void // La tua funzione per gestire la conferma dell'acquisto
  // Rimuovi la prop showConfetti da qui
}

export const CustomPurchaseAlert: React.FC<CustomPurchaseAlertProps> = ({ title, message, onClose, onConfirm }) => {
  const { width, height } = useWindowSize() // Ottieni le dimensioni della finestra

  // *** DEBUGGING: Controlla questi valori nella console del browser! ***
  // Ora Confetti viene renderizzato se il componente è montato e width/height sono validi
  console.log("CustomPurchaseAlert renderizzato. width:", width, "height:", height)

  return (
    <>
      {/* Renderizza Confetti qui. Sarà visibile finché questo componente è montato. */}
      {/* Assicurati che width e height siano maggiori di 0 per disegnare i coriandoli */}
      {width > 0 && height > 0 && (
        <Confetti
          width={width}
          height={height}
          recycle={false} // I coriandoli si fermeranno dopo un singolo "burst"
          numberOfPieces={200}
          // Imposta uno z-index estremamente alto per essere sicuro che sia sopra l'overlay
          style={{ zIndex: 99999 }}
        />
      )}

      {/* Il contenuto effettivo dell'alert. Sarà centrato e stilizzato da react-confirm-alert */}
      <div className="bg-white rounded-lg shadow-xl border-2 border-green-700 p-6 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={() => {
            onConfirm() // Esegui la logica di conferma (svuota carrello)
            onClose() // Chiudi il modale di react-confirm-alert
          }}
          className="bg-green-700 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-green-800 transition-colors"
        >
          OK
        </button>
      </div>
    </>
  )
}
