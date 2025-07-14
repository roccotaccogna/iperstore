import { Link } from "react-router-dom"
import mele from "../images/mele.jpg"
import lattuga from "../images/lattuga.jpg"
import biscotto from "../images/biscotto.jpg"
import latte from "../images/latte.jpg"
import shampoo from "../images/shampoo.jpg"
import coca from "../images/cocacola.jpg"
import birra from "../images/birra.jpg"
import vinoRosso from "../images/vinoRosso.jpg"
import pane from "../images/pane.jpg"
import mozzarella from "../images/mozzarella.jpg"
import salmone from "../images/salmone.jpg"
import salsiccia from "../images/salsiccia.jpg"
import olio from "../images/olio.jpg"
import detersivo from "../images/detersivo.jpg"

interface CategoryCardProps {
  categoryName: string
}

// Funzione per ottenere un'immagine placeholder più specifica o un'immagine reale
const getCategoryImageUrl = (category: string) => {
  // *** IMPORTANTE: Inserisci qui i percorsi delle tue immagini reali ***
  switch (category) {
    case "Frutta":
      return mele
    case "Verdura":
      return lattuga
    case "Biscotti":
      return biscotto
    case "Latte":
      return latte
    case "Cura Personale":
      return shampoo
    case "Bibite":
      return coca
    case "Birre":
      return birra
    case "Vino":
      return vinoRosso
    case "Panetteria":
      return pane
    case "Latticini":
      return mozzarella
    case "Pesce":
      return salmone
    case "Carne":
      return salsiccia
    case "Dispensa":
      return olio
    case "Pulizia Casa":
      return detersivo
    default:
      return `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(category)}`
  }
}

export default function CategoryCard({ categoryName }: CategoryCardProps) {
  const imageUrl = getCategoryImageUrl(categoryName)

  return (
    <Link to={`/category/${encodeURIComponent(categoryName)}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
        <div className="relative w-full h-40 mb-4">
          {/* Usa un tag <img> standard per Vite */}
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={categoryName}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-xl font-semibold text-black text-center">{categoryName}</h3>
      </div>
    </Link>
  )
}