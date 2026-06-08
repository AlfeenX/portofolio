import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const text =
  "A passionate full stack developer with a knack for crafting seamless user experiences and robust backend solutions. With a strong foundation in both frontend and backend technologies, I thrive on creating innovative applications that solve real-world problems. My journey in coding has been fueled by curiosity and a relentless drive to learn, making me adept at navigating the ever-evolving landscape of web development.";

const About = () => {
  const sectionRef = useRef(null);
  const stampRef = useRef(null);

  useGSAP(() => {
    const words = gsap.utils.toArray(".about-word");

    gsap.set(words, {
      opacity: 0.15,
    });

    gsap.set(stampRef.current, {
      scale: 3,
      rotate: -25,
      opacity: 0,
      filter: "blur(15px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(sectionRef.current, {
      backgroundColor : "rgba(255,255,255,0)"
    }, {
      backgroundColor : "rgba(255,255,255,1)",
      duration : 0.1
    })

    tl.to(stampRef.current, {
      scale: 0.9,
      rotate: -5,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.2,
      ease: "power4.out",
    });

    tl.to(stampRef.current, {
      scale: 1.08,
      duration: 0.05,
    });

    tl.to(stampRef.current, {
      scale: 1,
      duration: 0.05,
    });

    tl.to({}, { duration: 0.2 });

    tl.fromTo(".words-container",{
      opacity: 0,
      scale: 1.08
    },{
      opacity: 1,
      scale: 1,
      duration: 0.2
    })


    tl.to(words, {
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <h1 ref={stampRef} className="absolute left-[50%] top-[10%] -translate-x-1/2 font-blowbrush text-3xl md:text-6xl -rotate-5 text-amber-500 pointer-events-none border-4 border-amber-500 py-2 px-4">
        ABOUT ME?
      </h1>

      <p className="font-nohemi text-2xl md:text-3xl leading-normal max-w-5xl words-container"
      >
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            className="about-word inline-block"
          >
            {word}&nbsp;
          </span>
        ))}
      </p>
    </section>
  );
};

export default About;