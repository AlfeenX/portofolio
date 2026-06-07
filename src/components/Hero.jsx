import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const roleRef = useRef(null);
  const locationRef = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);

  const letters = "ALFIN BCHTR".split("");

  useGSAP(() => {
    const chars = gsap.utils.toArray(".hero-char");

    const introTl = gsap.timeline();

    introTl
      .from(chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
      })
      .from(
        roleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3",
      )
      .from(
        locationRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3",
      );

    gsap.set(photo1Ref.current, {
      y: 500,
      opacity: 0,
      rotate: -8,
    });

    gsap.set(photo2Ref.current, {
      y: 500,
      opacity: 0,
      rotate: 8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=250%",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(
      photo1Ref.current,
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
      },
      0,
    );

    tl.to(
      photo2Ref.current,
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
      },
      0,
    );

    tl.to(
      contentRef.current,
      {
        scale: 0.75,
        opacity: 0.3,
        filter: "blur(18px)",
        duration: 1,
      },
      1.3,
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <div ref={contentRef} className="absolute inset-0">
        <div className="absolute inset-0 flex-center">
          <h1 className="font-thunder text-8xl md:text-[10rem] z-30 overflow-hidden">
            {letters.map((letter, i) => (
              <span key={i} className="hero-char inline-block">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <div
            ref={photo1Ref}
            className="absolute top-[25%] left-[17%] w-60 h-72 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/photos/photo2.webp')",
            }}
          />

          <div
            ref={photo2Ref}
            className="absolute top-[58%] right-[23%] w-40 h-52 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/photos/photo1.webp')",
            }}
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
          <p ref={roleRef}>//Full Stack Developer</p>
          <p ref={locationRef}>//Kediri, Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
