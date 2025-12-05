import { useState } from "react";
import ProductModal from "./ProductModal";
import labiosImg from "@/assets/labios.png";
import olhosImg from "@/assets/olhos.png";
import rostoImg from "@/assets/rosto.png";
import tendenciaImg from "@/assets/tendencia.png";

const products = [
  {
    id: 1,
    name: "Lábios",
    description: "Coleção completa de batons e gloss para lábios perfeitos",
    price: "R$ 49,90",
    image: labiosImg,
  },
  {
    id: 2,
    name: "Olhos",
    description: "Sombras, delineadores e máscaras para um olhar marcante",
    price: "R$ 79,90",
    image: olhosImg,
  },
  {
    id: 3,
    name: "Rosto",
    description: "Bases, corretivos e iluminadores para uma pele radiante",
    price: "R$ 89,90",
    image: rostoImg,
  },
  {
    id: 4,
    name: "Tendência",
    description: "Os looks mais desejados da temporada em um só kit",
    price: "R$ 129,90",
    image: tendenciaImg,
  },
];

const LooksSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="looks" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">LOOKS E DICAS DE MAQUIAGEM</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </section>
  );
};

export default LooksSection;
