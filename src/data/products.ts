import arecanut from "@/assets/product-arecanut.png";
import cloves from "@/assets/product-cloves.png";
import goraka from "@/assets/product-goraka.png";
import pepper from "@/assets/product-pepper.png";
import greenpepper from "@/assets/product-greenpepper.png";
import whitepepper from "@/assets/product-whitepepper.png";
import nutmeg from "@/assets/product-nutmeg.png";
import mace from "@/assets/product-mace.png";
import mixpepper from "@/assets/product-mixpepper.png";
import charcoal from "@/assets/product-charcoal.png";
import whitecoffee from "@/assets/product-whitecoffee.png";
import blackcoffee from "@/assets/product-blackcoffee.png";
import dehydratedpepper from "@/assets/dehyratedpepper.png";

export type ProductCategory = "Bark & Aromatics" | "Seeds & Berries" | "Fruits & Nuts";

export interface Product {
  slug: string;
  name: string;
  botanical: string;
  category: ProductCategory;
  description: string;
  grades: string;
  packing: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    slug: "arecanut",
    name: "Arecanut",
    botanical: "Areca catechu",
    category: "Fruits & Nuts",
    description:
      "Sun-dried Sri Lankan arecanut with consistent sizing and low moisture, supplied whole or split for large-volume industrial and wholesale buyers.",
    grades: "Whole, split and sliced grades",
    packing: "50 kg PP bags / 25 kg cartons",
    image: arecanut,
    alt: "Whole dried Sri Lankan arecanut for bulk export",
  },
  {
    slug: "cloves",
    name: "Cloves",
    botanical: "Syzygium aromaticum",
    category: "Bark & Aromatics",
    description:
      "High-quality cloves harvested from Sri Lanka, known for their intense aroma and flavour, suitable for both culinary and medicinal uses.",
    grades: "A, B, C grades",
    packing: "25 kg PP bags / 10 kg cartons",
    image: cloves,
    alt: "Bundle of Ceylon cinnamon quills tied with twine",
  },
  {
    slug: "goraka",
    name: "Goraka",
    botanical: "Garcinia cambogia",
    category: "Fruits & Nuts",
    description:
      "Naturally smoke dried goraka slices with a deep sour profile used across South Asian cuisine by nutraceutical manufacturers for HCA extraction.",
    grades: "Dried slices and cleaned whole rind",
    packing: "25 kg PP bags / customised retail packs",
    image: goraka,
    alt: "Dried goraka garcinia cambogia slices",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    botanical: "Piper nigrum",
    category: "Seeds & Berries",
    description:
      "Bold, high-piperine Sri Lankan black pepper berries, machine-cleaned and graded by bulk density for food manufacturers and spice packers.",
    grades: "500 g/l, 550 g/l, 600 g/l FAQ",
    packing: "50 kg PP bags / jute bags",
    image: pepper,
    alt: "Whole black peppercorns from Sri Lanka",
  },
  {
    slug: "green-pepper",
    name: "Green Pepper",
    botanical: "Piper nigrum",
    category: "Seeds & Berries",
    description:
      "Fresh, unripe green pepper berries with a mild, slightly tangy flavour, suitable for culinary applications and spice blends.",
    grades: "Hand-picked selected, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: greenpepper,
    alt: "Whole fresh green pepper berries",
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    botanical: "Piper nigrum",
    category: "Seeds & Berries",
    description:
      "Clean, white pepper berries with a sharp, pungent flavour, ideal for culinary applications and spice blends.",
    grades: "Hand-picked selected, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: whitepepper,
    alt: "Whole fresh white pepper berries",
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    botanical: "Myristica fragrans",
    category: "Fruits & Nuts",
    description:
      "Sound, shelled Sri Lankan nutmeg with rich oil content, counted per kilogram and inspected for defects before every shipment.",
    grades: "80s, 110s, 130s count per kg",
    packing: "25 kg jute or PP bags",
    image: nutmeg,
    alt: "Whole shelled nutmeg seeds",
  },
  {
    slug: "mace",
    name: "Mace",
    botanical: "Myristica fragrans (aril)",
    category: "Bark & Aromatics",
    description:
      "Bright, whole mace blades carefully dried to preserve colour and essential oil, supplied to premium seasoning and confectionery producers.",
    grades: "Whole blades, broken",
    packing: "20 kg cartons, food-grade liner",
    image: mace,
    alt: "Dried red mace blades from nutmeg aril",
  },
  {
    slug: "mixed-pepper",
    name: "Mixed Pepper",
    botanical: "Piper nigrum",
    category: "Seeds & Berries",
    description:
      "A blend of black, green, and white pepper berries, offering a balanced flavour profile for diverse culinary applications.",
    grades: "Mixed blend, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: mixpepper,
    alt: "Mixed pepper berries blend",
  },
  {
    slug: "charcoal",
    name: "Charcoal",
    botanical: "Carbon",
    category: "Bark & Aromatics",
    description:
      "High-quality charcoal produced from sustainable wood sources, ideal for grilling and smoking applications.",
    grades: "Fine, medium, coarse grades",
    packing: "25 kg / 50 kg PP bags",
    image: charcoal,
    alt: "Bundles of high-quality charcoal",
  },
  {
    slug: "white-coffee",
    name: "White Coffee",
    botanical: "Coffea arabica",
    category: "Fruits & Nuts",
    description:
      "Premium white coffee beans with a mild, smooth flavour, ideal for specialty brewing and roasting.",
    grades: "Select grade, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: whitecoffee,
    alt: "Bundles of high-quality white coffee beans",
  },
  {
    slug: "black-coffee",
    name: "Black Coffee",
    botanical: "Coffea arabica",
    category: "Fruits & Nuts",
    description:
      "Premium black coffee beans with a bold, robust flavour, ideal for specialty brewing and roasting.",
    grades: "Select grade, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: blackcoffee,
    alt: "Bundles of high-quality black coffee beans",
  },
  {
    slug: "dehydrated-pepper",
    name: "Dehydrated Pepper",
    botanical: "Piper nigrum",
    category: "Seeds & Berries",
    description:
      "Concentrated dehydrated pepper powder with a intense flavour, suitable for culinary applications and spice blends.",
    grades: "Standard, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: dehydratedpepper,
    alt: "Bundles of dehydrated pepper powder",
  }

];

export const featuredProducts = products.filter((p) =>
  ["arecanut", "goraka", "black-pepper"].includes(p.slug),
);

export const categories: ProductCategory[] = [
  "Bark & Aromatics",
  "Seeds & Berries",
  "Fruits & Nuts",
];