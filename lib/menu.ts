export type MenuCategory = "Starters" | "Mains" | "Desserts" | "Drinks";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  tags?: string[];
};

export const categories: MenuCategory[] = ["Starters", "Mains", "Desserts", "Drinks"];

export const menuItems: MenuItem[] = [
  {
    name: "Smoked Eggplant Dip",
    description: "Charred eggplant, tahini, pomegranate, and warm sourdough.",
    price: "$12",
    category: "Starters",
    tags: ["Vegetarian"],
  },
  {
    name: "Citrus Calamari",
    description: "Lightly fried calamari with lemon zest and herb aioli.",
    price: "$15",
    category: "Starters",
  },
  {
    name: "Roasted Beet Carpaccio",
    description: "Goat cheese mousse, pistachio dust, and orange vinaigrette.",
    price: "$13",
    category: "Starters",
    tags: ["Gluten-Free"],
  },
  {
    name: "Lamb Shoulder Confit",
    description: "Slow-cooked lamb, saffron couscous, and mint jus.",
    price: "$31",
    category: "Mains",
  },
  {
    name: "Sea Bass al Forno",
    description: "Oven-baked sea bass with fennel, olives, and citrus butter.",
    price: "$32",
    category: "Mains",
    tags: ["Chef Pick"],
  },
  {
    name: "Wild Mushroom Orzotto",
    description: "Creamy orzo, truffle oil, and aged pecorino.",
    price: "$24",
    category: "Mains",
    tags: ["Vegetarian"],
  },
  {
    name: "Honey Fig Tart",
    description: "Almond crust, whipped mascarpone, and thyme honey.",
    price: "$12",
    category: "Desserts",
  },
  {
    name: "Pistachio Semifreddo",
    description: "Frozen pistachio cream with orange blossom caramel.",
    price: "$14",
    category: "Desserts",
    tags: ["Signature"],
  },
  {
    name: "Dark Chocolate Mousse",
    description: "Single-origin cocoa mousse with sea salt brittle.",
    price: "$11",
    category: "Desserts",
  },
  {
    name: "Cedar Old Fashioned",
    description: "Bourbon, cedar smoke, orange bitters, and brown sugar.",
    price: "$16",
    category: "Drinks",
  },
  {
    name: "Mediterranean Spritz",
    description: "Citrus aperitif, sparkling wine, rosemary, and tonic.",
    price: "$14",
    category: "Drinks",
  },
  {
    name: "Pomegranate Mint Cooler",
    description: "Fresh pomegranate, mint, and chilled soda water.",
    price: "$9",
    category: "Drinks",
    tags: ["Non-Alcoholic"],
  },
];

export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}
