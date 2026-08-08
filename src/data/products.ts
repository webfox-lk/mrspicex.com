import arecanut from "@/assets/product-arecanut.png";
import cinnamon from "@/assets/product-cinnamon.png";
import goraka from "@/assets/product-goraka.png";
import pepper from "@/assets/product-pepper.png";
import cloves from "@/assets/product-cloves.png";
import cardamom from "@/assets/product-cardamom.png";
import nutmeg from "@/assets/product-nutmeg.jpg";
import mace from "@/assets/product-mace.jpg";
import vanilla from "@/assets/product-vanilla.jpg";

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
    slug: "ceylon-cinnamon",
    name: "Ceylon Cinnamon",
    botanical: "Cinnamomum verum",
    category: "Bark & Aromatics",
    description:
      "Ceylon cinnamon quills hand rolled by traditional peelers prized worldwide for their delicate sweetness and naturally low coumarin content.",
    grades: "Alba, C5 Special, C5, C4, H1",
    packing: "25 kg cartons, moisture-barrier lined",
    image: cinnamon,
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
    slug: "cloves",
    name: "Cloves",
    botanical: "Syzygium aromaticum",
    category: "Bark & Aromatics",
    description:
      "Hand-picked whole cloves with high volatile oil content and a strong, clean aroma — headless percentage controlled to buyer specification.",
    grades: "Hand-picked selected, FAQ",
    packing: "25 kg / 50 kg PP bags",
    image: cloves,
    alt: "Whole dried cloves for bulk spice export",
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    botanical: "Elettaria cardamomum",
    category: "Seeds & Berries",
    description:
      "Green cardamom pods grown in Sri Lanka's central highlands, size-graded for uniform appearance and a bright, intensely aromatic profile.",
    grades: "6 mm, 7 mm, 8 mm bold",
    packing: "10 kg / 20 kg vacuum-sealed cartons",
    image: cardamom,
    alt: "Green cardamom pods graded for export",
  },
  // {
  //   slug: "nutmeg",
  //   name: "Nutmeg",
  //   botanical: "Myristica fragrans",
  //   category: "Fruits & Nuts",
  //   description:
  //     "Sound, shelled Sri Lankan nutmeg with rich oil content, counted per kilogram and inspected for defects before every shipment.",
  //   grades: "80s, 110s, 130s count per kg",
  //   packing: "25 kg jute or PP bags",
  //   image: nutmeg,
  //   alt: "Whole shelled nutmeg seeds",
  // },
  // {
  //   slug: "mace",
  //   name: "Mace",
  //   botanical: "Myristica fragrans (aril)",
  //   category: "Bark & Aromatics",
  //   description:
  //     "Bright, whole mace blades carefully dried to preserve colour and essential oil, supplied to premium seasoning and confectionery producers.",
  //   grades: "Whole blades, broken",
  //   packing: "20 kg cartons, food-grade liner",
  //   image: mace,
  //   alt: "Dried red mace blades from nutmeg aril",
  // },
  // {
  //   slug: "vanilla",
  //   name: "Vanilla",
  //   botanical: "Vanilla planifolia",
  //   category: "Seeds & Berries",
  //   description:
  //     "Cured Sri Lankan vanilla beans with a supple texture and deep aromatic profile, graded by length for gourmet and extraction-grade buyers.",
  //   grades: "Gourmet 14 cm+, extraction grade",
  //   packing: "1 kg vacuum packs in 10 kg cartons",
  //   image: vanilla,
  //   alt: "Whole cured vanilla beans",
  // },
];

export const featuredProducts = products.filter((p) =>
  ["arecanut", "ceylon-cinnamon", "goraka"].includes(p.slug),
);

export const categories: ProductCategory[] = [
  "Bark & Aromatics",
  "Seeds & Berries",
  "Fruits & Nuts",
];