export interface Product {
  id: string
  name: string
  price: number
  unit: string // e.g., "pezzo", "kg", "litro", "confezione"
  image: string
  category: string
}

export interface CartItem extends Product {
  quantity: number
}
