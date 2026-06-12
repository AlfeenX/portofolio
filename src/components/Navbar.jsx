import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    tl.to(nameRef.current, { yPercent: -50 });
    tl.reversed(true);

    const doCoolStuff = () => {
      tl.reversed(!tl.reversed());
    };

    nameRef.current.addEventListener("mouseenter", doCoolStuff);
    nameRef.current.addEventListener("mouseleave", doCoolStuff);

    return () => {
      nameRef.current.removeEventListener("mouseenter", doCoolStuff);
      nameRef.current.removeEventListener("mouseleave", doCoolStuff);
    };
  });

  useGSAP(() => {
    const overlay = overlayRef.current;
    const items = menuItemsRef.current?.querySelectorAll(".menu-item");

    if (menuOpen) {
      gsap.to(nameRef.current, { color: "#ffffff", duration: 0.7 });
      gsap.to(overlay, {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        duration: 0.7,
        ease: "power4.inOut",
      });


      gsap.fromTo(
        items,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        },
      );
    } else {
      gsap.to(items, {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power3.in",
      });

      gsap.to(nameRef.current, { color: "#000000", duration: 0.3 });
      gsap.to(overlay, {
        clipPath: "inset(0% 0% 100% 100% round 0px)",
        duration: 0.7,
        ease: "power4.inOut",
        delay: 0.2,
      });

    }
  }, [menuOpen]);

  const menuLinks = ["ABOUT", "PROJECTS", "CONTACT"];
  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-40 flex flex-col justify-end px-4 py-16 md:px-8"
        style={{ clipPath: "inset(0% 0% 100% 100% round 0px)" }}
      >
        <div ref={menuItemsRef} className="flex flex-col gap-4">
          {menuLinks.map((link) => (
            <div key={link} className="overflow-hidden">
              <a href="#" className="menu-item font-nohemi text-white/60 text-4xl md:text-6xl cursor-pointer hover:text-white transition-opacity block">{link}</a>
            </div>
          ))}
        </div>
      </div>

      <nav className="nav-style">
        <div className="font-nohemi h-7 md:h-[5vh] overflow-hidden md:text-[1.5vw]">
          <div ref={nameRef} className="cursor-default">
            <p>ALFIN</p>
            <p>ALFIN</p>
          </div>
        </div>

        <div
          className="font-geist hidden md:inline text-[0.8vw] text-gray-400"
          id="time"
        >
          Kediri, Indonesia - {formattedTime} (UTC+07:00)
        </div>

        <div
          className="font-nohemi cursor-pointer select-none md:text-[1.5vw]"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            color: menuOpen ? "#ffffff" : "#000000",
            zIndex: 51,
            position: "relative",
          }}
        >
          {menuOpen ? "CLOSE." : "MENU."}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
