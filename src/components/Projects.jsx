import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projects } from "../../constants";
import gsap from "gsap";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".project-section");
    if (sections.length <= 1) return;

    // Inisialisasi Timeline Utama dengan Pinning layar
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${(sections.length - 1) * 100}%`,
        pin: true,
        scrub: 1, 
        invalidateOnRefresh: true,
      }
    });

    sections.forEach((section, i) => {
      if (i === 0) return;

      const prevSection = sections[i - 1];
      const prevContent = prevSection.querySelector(".project-content");
      const currentContent = section.querySelector(".project-content");

      gsap.set(section, { yPercent: 100 });
      gsap.set(currentContent, { scale: 0.85, opacity: 0 });
      
      tl.to(prevContent, {
        duration: 1,
        ease: "power1.inOut"
      }, i === 1 ? 0 : `>-=0.6`);

      tl.to(section, {
        yPercent: 90,
        duration: 0.4, // Cepat saja untuk efek ngintip awal
        ease: "power1.out"
      }, "<"); // Berjalan berbarengan dengan animasi mengecil di atas

      // 3. Slide ini LANJUT NAIK PENUH & Kontennya membesar/muncul (90% -> 0%)
      tl.to(section, {
        yPercent: 0,
        duration: 0.8,
        ease: "power1.inOut"
      });

      tl.to(currentContent, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.6");
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {projects.map((project, index) => (
        <section
          key={project.id}
          className="project-section absolute inset-0 w-full h-full will-change-transform"
          style={{
            zIndex: index + 1,
          }}
        >
          {/* Background Layer */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            {/* Overlay Gelap */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: project.color, opacity: 0.80 }}
            />
          </div>

          {/* Wrapper Konten (Ini yang dianimasikan scale & opacity-nya) */}
          <div className="project-content relative z-10 h-full flex flex-col justify-center items-center will-change-transform">
            <h1 className="text-8xl font-bold text-white select-none tracking-tight">
              {project.title}
            </h1>
            <p className="text-white/80 mt-4 max-w-md text-center text-lg">
              {project.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;