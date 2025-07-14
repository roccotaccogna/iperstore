import { Link } from "react-router-dom" // Usa Link da react-router-dom

interface CategoryCardProps {
  categoryName: string
}

// Funzione per ottenere un'immagine placeholder più specifica o un'immagine reale
const getCategoryImageUrl = (category: string) => {
  // *** IMPORTANTE: Inserisci qui i percorsi delle tue immagini reali ***
  switch (category) {
    case "Frutta":
      return "/src/images/mele.jpg"
    case "Verdura":
      return "/src/images/lattuga.jpg" 
    case "Biscotti":
      return "/src/images/biscotto.jpg"
    case "Latte":
      return "/src/images/latte.jpg"
    case "Cura Personale":
      return "/src/images/shampoo.jpg"
    case "Bibite":
      return "/src/images/cocacola.jpg"
    case "Birre":
      return "/src/images/birra.jpg"
    case "Vino":
      return "/src/images/vinoRosso.jpg"
    case "Panetteria":
      return "/src/images/pane.jpg"
    case "Latticini":
      return "/src/images/mozzarellaNodini.jpg"
    case "Pesce":
      return "/src/images/salmone.jpg"
    case "Carne":
      return "/src/images/salsiccia.jpg"
    case "Dispensa":
      return "/src/images/olio.jpg"
    case "Pulizia Casa":
      return "/src/images/detersivo.jpg"
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