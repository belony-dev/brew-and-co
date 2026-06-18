export type Category =
  | "Espresso Drinks"
  | "Cold Drinks"
  | "Pastries"
  | "Sandwiches";
export type Badge = "Popular" | "House Favorite" | "New" | "Seasonal" | "";

export interface MenuItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  badge: Badge;
  image: string;
}

export const menuItems: MenuItem[] = [
  // ── Espresso Drinks ──────────────────────────────────────────────
  {
    id: "classic-espresso",
    category: "Espresso Drinks",
    name: "Classic Espresso",
    description:
      "Single shot of rich bold espresso with a golden crema — our purest expression.",
    price: 3.5,
    badge: "House Favorite",
    image: "/assets/classic-espresso.jpg",
  },
  {
    id: "doppio",
    category: "Espresso Drinks",
    name: "Doppio",
    description:
      "Double shot espresso, intensely concentrated and smooth with a lingering finish.",
    price: 4.0,
    badge: "",
    image: "/assets/doppio.jpg",
  },
  {
    id: "cappuccino",
    category: "Espresso Drinks",
    name: "Cappuccino",
    description:
      "Equal parts espresso, steamed milk, and silky microfoam in perfect harmony.",
    price: 5.5,
    badge: "Popular",
    image: "/assets/cappuccino.jpg",
  },
  {
    id: "caramel-latte",
    category: "Espresso Drinks",
    name: "Caramel Latte",
    description:
      "Espresso and steamed whole milk finished with a ribbon of house-made caramel.",
    price: 5.75,
    badge: "Popular",
    image: "/assets/caramel-latte.jpg",
  },
  {
    id: "caramel-macchiato",
    category: "Espresso Drinks",
    name: "Caramel Macchiato",
    description:
      "Vanilla-infused milk layered with espresso shots and a hand-poured caramel drizzle.",
    price: 6.25,
    badge: "House Favorite",
    image: "/assets/caramel-macchiato.jpg",
  },
  {
    id: "flat-white",
    category: "Espresso Drinks",
    name: "Flat White",
    description:
      "Two ristretto shots pulled short with velvety microfoam — strong and silky smooth.",
    price: 5.5,
    badge: "",
    image: "/assets/flat-white.jpg",
  },
  {
    id: "cortado",
    category: "Espresso Drinks",
    name: "Cortado",
    description:
      "Equal parts espresso and warm milk for a bold yet perfectly balanced sip.",
    price: 4.75,
    badge: "New",
    image: "/assets/cortado.jpg",
  },

  // ── Cold Drinks ──────────────────────────────────────────────────
  {
    id: "cold-brew",
    category: "Cold Drinks",
    name: "Cold Brew",
    description:
      "Slow-steeped for 18 hours over ice — exceptionally smooth with almost no acidity.",
    price: 5.5,
    badge: "Popular",
    image: "/assets/cold-brew.jpg",
  },
  {
    id: "iced-caramel-latte",
    category: "Cold Drinks",
    name: "Iced Caramel Latte",
    description:
      "Chilled double espresso over ice with caramel syrup and cold oat milk.",
    price: 6.0,
    badge: "",
    image: "/assets/iced-caramel-latte.jpg",
  },
  {
    id: "matcha-oat-latte",
    category: "Cold Drinks",
    name: "Matcha Oat Latte",
    description:
      "Ceremonial-grade matcha whisked smooth then poured over ice with steamed oat milk.",
    price: 6.25,
    badge: "New",
    image: "/assets/matcha-oat-latte.jpg",
  },
  {
    id: "mango-passion-refresher",
    category: "Cold Drinks",
    name: "Mango Passion Refresher",
    description:
      "Tropical fruit tea shaken with fresh mango puree, passion fruit, and a hint of mint.",
    price: 5.75,
    badge: "Seasonal",
    image: "/assets/mango-passion-refresher.jpg",
  },
  {
    id: "chocolate-mudslide-shake",
    category: "Cold Drinks",
    name: "Chocolate Mudslide Shake",
    description:
      "Dark chocolate blended with cold brew espresso cream and finished with whipped cream.",
    price: 7.5,
    badge: "House Favorite",
    image: "/assets/chocolate-mudslide-shake.jpg",
  },

  // ── Pastries ─────────────────────────────────────────────────────
  {
    id: "butter-croissant",
    category: "Pastries",
    name: "Butter Croissant",
    description:
      "Flaky golden-layered croissant made with cultured European butter, baked fresh daily.",
    price: 4.0,
    badge: "Popular",
    image: "/assets/butter-croissant.jpg",
  },
  {
    id: "chocolate-almond-croissant",
    category: "Pastries",
    name: "Chocolate Almond Croissant",
    description:
      "Twice-baked croissant filled with almond cream and studded with dark chocolate chips.",
    price: 5.5,
    badge: "House Favorite",
    image: "/assets/chocolate-almond-croissant.jpg",
  },
  {
    id: "blueberry-muffin",
    category: "Pastries",
    name: "Blueberry Muffin",
    description:
      "Plump blueberries folded into a moist vanilla muffin with a crunchy raw sugar top.",
    price: 3.75,
    badge: "",
    image: "/assets/blueberry-muffin.jpg",
  },
  {
    id: "cardamom-morning-bun",
    category: "Pastries",
    name: "Cardamom Morning Bun",
    description:
      "Spiraled pastry dusted with cardamom sugar and bright orange zest — baked to order.",
    price: 4.5,
    badge: "Seasonal",
    image: "/assets/cardamom-morning-bun.jpg",
  },
  {
    id: "cinnamon-roll",
    category: "Pastries",
    name: "Cinnamon Roll",
    description:
      "Soft pillowy roll swirled with brown sugar cinnamon and finished with cream cheese frosting.",
    price: 5.0,
    badge: "Popular",
    image: "/assets/cinnamon-roll.jpg",
  },
  // ── Sandwiches ───────────────────────────────────────────────────
  {
    id: "smoked-turkey-avocado",
    category: "Sandwiches",
    name: "Smoked Turkey Avocado",
    description:
      "Smoked turkey breast with creamy avocado, peppery arugula, and sun-dried tomato on sourdough.",
    price: 11.5,
    badge: "Popular",
    image: "/assets/smoked-turkey-avocado.jpg",
  },
  {
    id: "caprese-baguette",
    category: "Sandwiches",
    name: "Caprese Baguette",
    description:
      "Fresh mozzarella, heirloom tomatoes, and basil pesto on a toasted baguette with flaky salt.",
    price: 10.0,
    badge: "",
    image: "/assets/caprese-baguette.jpg",
  },
  {
    id: "prosciutto-fig-panini",
    category: "Sandwiches",
    name: "Prosciutto Fig Panini",
    description:
      "Thinly sliced prosciutto with brie, house fig jam, and arugula pressed on golden ciabatta.",
    price: 12.5,
    badge: "House Favorite",
    image: "/assets/prosciutto-fig-panini.jpg",
  },
];

export const featuredItems = menuItems
  .filter((item) => item.badge === "Popular" || item.badge === "House Favorite")
  .slice(0, 6);

export const categories: Category[] = [
  "Espresso Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];
