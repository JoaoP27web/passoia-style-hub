import novidadesImg from "@/assets/novidades.png";

const NewsSection = () => {
  return (
    <section id="novidades" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">NOVIDADES PARA VOCÊ</h2>

        <div className="w-full h-[30vh] overflow-hidden rounded-lg">
          <img
            src={novidadesImg}
            alt="Novidades"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
