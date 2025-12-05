import bannerImg from "@/assets/Banner.png";

const Hero = () => {
  return (
    <section className="w-full h-[60vh] relative overflow-hidden">
      <img
        src={bannerImg}
        alt="Passoia Banner"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Hero;
