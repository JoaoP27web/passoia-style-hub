import { useState } from "react";
import abertoImg from "@/assets/aberto.png";
import fechadoImg from "@/assets/fechado.png";
import batomImg from "@/assets/batom.png";
import estrelasImg from "@/assets/estrelas.png";
import cinzaBocaImg from "@/assets/cinza-boca.png";
import vermelhoBocaImg from "@/assets/vermelho-boca.png";
import bordoBocaImg from "@/assets/bordo-boca.png";
import nudeBocaImg from "@/assets/nude-boca.png";
import cinzaColorImg from "@/assets/cinza-color.png";
import vermelhoColorImg from "@/assets/vermelho-color.png";
import bordoColorImg from "@/assets/bordo-color.png";
import nudeColorImg from "@/assets/nude-color.png";

const colors = [
  { id: "cinza", color: cinzaColorImg, boca: cinzaBocaImg },
  { id: "vermelho", color: vermelhoColorImg, boca: vermelhoBocaImg },
  { id: "bordo", color: bordoColorImg, boca: bordoBocaImg },
  { id: "nude", color: nudeColorImg, boca: nudeBocaImg },
];

const LaunchesSection = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section id="lancamentos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">APROVEITE OS LANÇAMENTOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* 1ª Divisão - Produtos (esconde em mobile) */}
          <div className="hidden md:flex flex-col gap-4 items-center">
            <img src={abertoImg} alt="Batom aberto" className="w-48 h-auto object-contain" />
            <img src={fechadoImg} alt="Batom fechado" className="w-48 h-auto object-contain" />
            <img src={batomImg} alt="Batons" className="w-48 h-auto object-contain" />
          </div>

          {/* 2ª Divisão - Imagem principal */}
          <div className="flex justify-center">
            <img
              src={selectedColor.boca}
              alt="Modelo com batom"
              className="w-full max-w-sm h-auto rounded-lg shadow-lg transition-all duration-500"
            />
          </div>

          {/* 3ª Divisão - Descrição e cores */}
          <div className="flex flex-col gap-6">
            <img src={estrelasImg} alt="5 estrelas" className="h-6 w-auto self-start" />
            
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Matte Premium
            </h3>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Cores disponíveis</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`color-swatch overflow-hidden ${selectedColor.id === color.id ? "active" : ""}`}
                  >
                    <img
                      src={color.color}
                      alt={color.id}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Descrição</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchesSection;
