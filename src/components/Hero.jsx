import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=800",
          scrub: 3,
          pin: true,
        }
      });

      tl.from(photo1Ref.current, { yPercent: 800, rotate: -20 })
        .from(photo2Ref.current, { yPercent: 800, rotate: 20 }, "<")
        .to(nameRef.current, { yPercent: -70 }, "<0.05");
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=800",
          scrub: 3,
          pin: true,
        }
      });

      tl.from(photo1Ref.current, { yPercent: 800, rotate: -20 })
        .from(photo2Ref.current, { yPercent: 800, rotate: 20 }, "<");
    });
  });

  return (
    <section ref={sectionRef} className="h-80 md:min-h-dvh w-full overflow-hidden relative">
      <div ref={nameRef} className="w-full absolute left-1/2 top-1/2 md:top-[68%] -translate-x-1/2 text-center">
        <div className="w-full text-[20vw] font-thunder">
          <h1>ALFIN BACHTIAR</h1>
        </div>
      </div>

      <div ref={photo1Ref} className="absolute right-1/5 w-[15vw] h-[20vw] bg-[url('/images/photos/photo1.webp')] bg-cover bg-center rotate-3 bottom-65 md:bottom-1/3">
      </div>
      <div ref={photo2Ref} className="absolute left-1/5 w-[20vw] h-[25vw] bg-[url('/images/photos/photo2.webp')] bg-cover bg-center bottom-65 md:bottom-1/3 -rotate-3">
      </div>
    </section>
  );
};

export default Hero;