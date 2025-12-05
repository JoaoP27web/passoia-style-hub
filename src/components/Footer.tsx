import mastercardImg from "@/assets/mastercard.png";
import visaImg from "@/assets/visa.png";
import pixImg from "@/assets/pix.png";
import boletoImg from "@/assets/boleto.png";
import instagramImg from "@/assets/instagram.png";
import facebookImg from "@/assets/facebook-passoia.png";
import youtubeImg from "@/assets/youtube.png";
import twitterImg from "@/assets/twitter-passoia.png";

const Footer = () => {
  const atendimentos = [
    "Fale Conosco",
    "Perguntas Frequentes",
    "Meus Pedidos",
    "Nossas Lojas",
  ];

  const pagamentos = [
    { img: mastercardImg, alt: "Mastercard" },
    { img: visaImg, alt: "Visa" },
    { img: pixImg, alt: "Pix" },
    { img: boletoImg, alt: "Boleto" },
  ];

  const redes = [
    { img: instagramImg, alt: "Instagram", href: "#" },
    { img: facebookImg, alt: "Facebook", href: "#" },
    { img: youtubeImg, alt: "YouTube", href: "#" },
    { img: twitterImg, alt: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-muted py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Atendimentos */}
          <div className="text-center md:text-left">
            <h4 className="footer-title">Atendimentos</h4>
            <ul className="flex flex-col gap-2">
              {atendimentos.map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div className="text-center md:text-left">
            <h4 className="footer-title">Formas de Pagamento</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {pagamentos.map((item) => (
                <img
                  key={item.alt}
                  src={item.img}
                  alt={item.alt}
                  className="h-6 md:h-8 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="footer-title">Siga-nos nas Redes Sociais</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {redes.map((item) => (
                <a
                  key={item.alt}
                  href={item.href}
                  className="transition-transform hover:scale-110"
                  aria-label={item.alt}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-8 w-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Passoia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
