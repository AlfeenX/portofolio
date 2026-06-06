const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[95vh] mb-4">
      <div className="absolute inset-0 flex-center">
        <h1 className="font-thunder text-8xl z-30">ALFIN BCHTR</h1>
        <img
          src=""
          alt=""
          className="absolute top-80 right-76 w-45 h-32 bg-amber-50 "
        />
        <img
          src=""
          alt=""
          className="absolute top-40 left-55 w-64 h-32 aspect-auto bg-amber-50 "
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center w-full px-4">
        <p className="font-geist text-sm">//Full Stack Developer</p>
        <p className="font-geist text-sm">//Kediri, Indonesia</p>
      </div>
    </section>
  );
};

export default Hero;
