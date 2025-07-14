import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage"
import CategoryPage from "./pages/CategoryPage"
import CartPage from "./pages/CartPage"
import Header from "./components/Header"

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* L'Header è qui per essere presente su tutte le pagine */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Puoi aggiungere una rotta 404 qui se vuoi */}
        <Route path="*" element={<h1 className="text-center text-2xl mt-10">Pagina non trovata</h1>} />
      </Routes>
    </div>
  )
}

export default App
