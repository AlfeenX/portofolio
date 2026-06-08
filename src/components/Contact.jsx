import { TfiArrowTopRight } from "react-icons/tfi";
import { socialLinks, Techs } from "../../constants";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const [isHover, setIsHover] = useState(false);
  const containerRef = useRef(null);
  const groupRef = useRef(null);

  useGSAP(() => {
    const groupWidth = groupRef.current.offsetWidth;

    // Geser sejauh ukuran tepat SATU grup logo, lalu ulangi
    gsap.to(".marquee-group", {
      x: -groupWidth,
      ease: "none",
      duration: 20, // Atur kecepatan di sini (semakin besar semakin lambat)
      repeat: -1,
    });
  }, { scope: containerRef });
  
  return (
    <section className="h-screen w-full relative overflow-hidden gap-0 px-4 flex flex-col">
      <p className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-lg font-light tracking-[0.5em] font-geist whitespace-nowrap">
        Get in Touch
      </p>

      <div 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)} 
        className="absolute top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2 flex items-center whitespace-nowrap cursor-pointer"
      >
        <h1 className={`text-[150px] font-thunder ${isHover ? 'text-amber-500' : ''} leading-none transition-colors duration-300`}>
          CONTACT ME
        </h1>
        <TfiArrowTopRight className={`text-amber-500 shrink-0 m-0 transition-transform duration-300 ${isHover ? '-translate-y-2 translate-x-2' : ''}`} size={100} />
      </div>

      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-3xl">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="px-4 py-2 rounded-md hover:rotate-2 transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div ref={containerRef} className="absolute -bottom-4 left-0 w-full overflow-hidden bg-white py-4 backdrop-grayscale-75">
        <div className="flex w-max select-none">
          
          <div ref={groupRef} className="marquee-group flex items-center gap-20 pr-20 shrink-0">
            {Techs.map((tech) => (
              <img key={`g1-${tech.id}`} src={tech.image} alt={tech.name} className="h-12 w-auto object-contain" loading="lazy" />
            ))}
          </div>

          <div className="marquee-group flex items-center gap-20 pr-20 shrink-0" aria-hidden="true">
            {Techs.map((tech) => (
              <img key={`g2-${tech.id}`} src={tech.image} alt={tech.name} className="h-12 w-auto object-contain" loading="lazy"/>
            ))}
          </div>

          <div className="marquee-group flex items-center gap-20 pr-20 shrink-0" aria-hidden="true">
            {Techs.map((tech) => (
              <img key={`g3-${tech.id}`} src={tech.image} alt={tech.name} className="h-12 w-auto object-contain" loading="lazy"/>
            ))}
          </div>

          <div className="marquee-group flex items-center gap-20 pr-20 shrink-0" aria-hidden="true">
            {Techs.map((tech) => (
              <img key={`g4-${tech.id}`} src={tech.image} alt={tech.name} className="h-12 w-auto object-contain" loading="lazy"/>
            ))}
          </div>

        </div>
      </div>
      {/* ----------------------------------------- */}
    </section>
  );
};

export default Contact;