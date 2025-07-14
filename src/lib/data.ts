import type { Product } from "./types"
import mele from "../images/mele.jpg"
import banane from "../images/banana.jpg"
import arance from "../images/arance.jpg"
import lattuga from "../images/lattuga.jpg"
import pomodori from "../images/pomodori.jpg"
import zucchine from "../images/zucchine.jpg"
import biscotto from "../images/biscotto.jpg"
import frollini from "../images/frollini.jpg"
import latte from "../images/latte.jpg"
import latteParz from "../images/latteP.jpg"
import shampoo from "../images/shampoo.jpg"
import dentifricio from "../images/dentifricio.jpg"
import acqua from "../images/acqua.jpg"
import coca from "../images/cocacola.jpg"
import succo from "../images/succo.jpg"
import birraArt from "../images/birraA.jpg"
import birra from "../images/birra.jpg"
import vinoBianco from "../images/vinoBianco.jpg"
import vinoRosso from "../images/vinoRosso.jpg"
import pane from "../images/pane.jpg"
import formaggio from "../images/formaggio.jpg"
import cornetti from "../images/cornetti.jpg"
import mozzarella from "../images/mozzarella.jpg"
import salmone from "../images/salmone.jpg"
import salsiccia from "../images/salsiccia.jpg"
import gambero from "../images/gambero.jpg"
import pollo from "../images/pettoPollo.jpg"
import pasta from "../images/pane.jpg"
import olio from "../images/olio.jpg"
import detersivo from "../images/detersivo.jpg"

export const products: Product[] = [
  {
    id: "1",
    name: "Mele Rosse",
    price: 2.5,
    unit: "kg",
    image: mele,
    category: "Frutta",
  },
  {
    id: "2",
    name: "Banane",
    price: 1.8,
    unit: "kg",
    image: banane,
    category: "Frutta",
  },
  {
    id: "3",
    name: "Arance Navel",
    price: 2.2,
    unit: "kg",
    image: arance,
    category: "Frutta",
  },
  {
    id: "4",
    name: "Lattuga Romana",
    price: 1.2,
    unit: "pezzo",
    image: lattuga,
    category: "Verdura",
  },
  {
    id: "5",
    name: "Pomodori Ciliegino",
    price: 3.0,
    unit: "kg",
    image: pomodori,
    category: "Verdura",
  },
  {
    id: "6",
    name: "Zucchine",
    price: 1.9,
    unit: "kg",
    image: zucchine,
    category: "Verdura",
  },
  {
    id: "7",
    name: "Biscotti al Cioccolato",
    price: 2.99,
    unit: "confezione",
    image: biscotto,
    category: "Biscotti",
  },
  {
    id: "8",
    name: "Frollini Classici",
    price: 1.85,
    unit: "confezione",
    image: frollini,
    category: "Biscotti",
  },
  {
    id: "9",
    name: "Latte Fresco Intero",
    price: 1.1,
    unit: "litro",
    image: latte,
    category: "Latte",
  },
  {
    id: "10",
    name: "Latte Parzialmente Scremato UHT",
    price: 0.95,
    unit: "litro",
    image: latteParz,
    category: "Latte",
  },
  {
    id: "11",
    name: "Shampoo Delicato",
    price: 4.5,
    unit: "flacone",
    image: shampoo,
    category: "Cura Personale",
  },
  {
    id: "12",
    name: "Dentifricio Menta Fresca",
    price: 2.75,
    unit: "tubetto",
    image: dentifricio,
    category: "Cura Personale",
  },
  {
    id: "13",
    name: "Acqua Naturale",
    price: 0.5,
    unit: "bottiglia",
    image: acqua,
    category: "Bibite",
  },
  {
    id: "14",
    name: "Coca-Cola",
    price: 1.5,
    unit: "lattina",
    image: coca,
    category: "Bibite",
  },
  {
    id: "15",
    name: "Succo d'Arancia",
    price: 1.99,
    unit: "litro",
    image: succo,
    category: "Bibite",
  },
  {
    id: "16",
    name: "Birra Artigianale IPA",
    price: 3.8,
    unit: "bottiglia",
    image: birraArt,
    category: "Birre",
  },
  {
    id: "17",
    name: "Birra Lager Classica",
    price: 1.2,
    unit: "bottiglia",
    image: birra,
    category: "Birre",
  },
  {
    id: "18",
    name: "Vino Rosso Chianti",
    price: 8.99,
    unit: "bottiglia",
    image: vinoRosso,
    category: "Vino",
  },
  {
    id: "19",
    name: "Vino Bianco Vermentino",
    price: 7.5,
    unit: "bottiglia",
    image: vinoBianco,
    category: "Vino",
  },
  {
    id: "20",
    name: "Pane Casereccio",
    price: 3.2,
    unit: "pezzo",
    image: pane,
    category: "Panetteria",
  },
  {
    id: "21",
    name: "Cornetti Vuoti",
    price: 0.8,
    unit: "pezzo",
    image: cornetti,
    category: "Panetteria",
  },
  {
    id: "22",
    name: "Formaggio Parmigiano",
    price: 12.0,
    unit: "kg",
    image: formaggio,
    category: "Latticini",
  },
  {
    id: "23",
    name: "Mozzarella di Bufala",
    price: 3.5,
    unit: "confezione",
    image: mozzarella,
    category: "Latticini",
  },
  {
    id: "24",
    name: "Salmone Fresco",
    price: 18.5,
    unit: "kg",
    image: salmone,
    category: "Pesce",
  },
  {
    id: "25",
    name: "Gamberi Sgusciati",
    price: 15.0,
    unit: "confezione",
    image: gambero,
    category: "Pesce",
  },
  {
    id: "26",
    name: "Petto di Pollo",
    price: 9.5,
    unit: "kg",
    image: pollo,
    category: "Carne",
  },
  {
    id: "27",
    name: "Salsiccia Fresca",
    price: 7.0,
    unit: "kg",
    image: salsiccia,
    category: "Carne",
  },
  {
    id: "28",
    name: "Pasta di Grano Duro",
    price: 0.9,
    unit: "confezione",
    image: pasta,
    category: "Dispensa",
  },
  {
    id: "29",
    name: "Olio Extra Vergine d'Oliva",
    price: 6.5,
    unit: "litro",
    image: olio,
    category: "Dispensa",
  },
  {
    id: "30",
    name: "Detersivo Lavatrice",
    price: 5.99,
    unit: "flacone",
    image: detersivo,
    category: "Pulizia Casa",
  },
]

export const categories: string[] = [
  "Tutte le Categorie",
  "Frutta",
  "Verdura",
  "Biscotti",
  "Latte",
  "Cura Personale",
  "Bibite",
  "Birre",
  "Vino",
  "Panetteria",
  "Latticini",
  "Pesce",
  "Carne",
  "Dispensa",
  "Pulizia Casa",
]
