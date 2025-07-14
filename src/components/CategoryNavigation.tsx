import { categories } from "../lib/data"

interface CategoryNavigationProps {
  onSelectCategory: (category: string) => void
  selectedCategory: string
}

export default function CategoryNavigation({ onSelectCategory, selectedCategory }: CategoryNavigationProps) {
  return (
    <nav className="bg-white py-4 px-4 md:px-8 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex-shrink-0
              ${
                selectedCategory === category ? "bg-green-700 text-white" : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}
