import CategoryCard from "../components/CategoryCard"
import { categories } from "../lib/data"

export default function HomePage() {
  // Filtra "Tutte le Categorie" per non mostrarla come card separata
  const displayCategories = categories.filter((cat) => cat !== "Tutte le Categorie")

  return (
    <main className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Esplora le Categorie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayCategories.map((category) => (
          <CategoryCard key={category} categoryName={category} />
        ))}
      </div>
    </main>
  )
}
