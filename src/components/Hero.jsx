const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[95vh] mb-4">
      <div className="absolute inset-0 flex-center">
        <h1 className="font-thunder text-8xl z-30">ALFIN BCHTR</h1>
        <div className="absolute top-[25%] left-[17%] bg-[url('/images/photos/photo2.webp')] w-60 h-70 bg-cover bg-center"></div>
        <div className="absolute top-[58%] right-[23%] w-40 bg-[url('/images/photos/photo1.webp')] h-50 bg-cover bg-center"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center w-full px-4">
        <p className="font-geist text-sm">//Full Stack Developer</p>
        <p className="font-geist text-sm">//Kediri, Indonesia</p>
      </div>
    </section>
  );
};

export default Hero;
