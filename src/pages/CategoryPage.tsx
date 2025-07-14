import { useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import CategoryNavigation from "../components/CategoryNavigation"
import ProductList from "../components/ProductList"
import { products as allProducts } from "../lib/data"

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>() // Ottieni il parametro dalla URL
  const initialCategory = categoryName ? decodeURIComponent(categoryName) : "Tutte le Categorie"
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Tutte le Categorie") {
      return allProducts
    }
    return allProducts.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <CategoryNavigation selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <main className="container mx-auto py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 px-4 md:px-0">Prodotti in {selectedCategory}</h2>
        <ProductList products={filteredProducts} />
      </main>
    </>
  )
}