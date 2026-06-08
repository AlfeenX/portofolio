import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuContainer = useRef(null);
  const labelRef = useRef(null);

  const menuTl = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".logo-text",
      {
        yPercent: 0,
      },
      {
        yPercent: -50,
        scrollTrigger: {
          trigger: document.body,
          start: "50px top",
          end: "200px top",
          scrub: 0.8,
        },
      }
    );
  });

  useGSAP(() => {
    gsap.set(menuContainer.current, {
      width: 0,
    });

    gsap.set(labelRef.current, {
      yPercent: 0,
    });

    menuTl.current = gsap.timeline({ paused: true });

    menuTl.current
      .to(
        menuContainer.current,
        {
          width: 350,
          duration: 0.4,
          ease: "power3.out",
        },
        0
      )
      .to(
        labelRef.current,
        {
          yPercent: -50,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )
      .from(
        menuContainer.current.querySelectorAll(".nav-item"),
        {
          x: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.3,
        },
        "-=0.15"
      );
  }, []);

  const toggleMenu = () => {
    if (!menuTl.current) return;

    if (isOpen) {
      menuTl.current.reverse();
    } else {
      menuTl.current.play();
    }

    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
      <div className="h-7 overflow-hidden">
        <div className="logo-text">
          <p className="font-bold text-lg">HELLO!</p>
          <p className="font-bold text-lg">ALFIN.</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div
          ref={menuContainer}
          className="overflow-hidden"
        >
          <ul className="flex gap-6 whitespace-nowrap">
            <li className="nav-item font-bold">
              <a href="#home">HOME</a>
            </li>

            <li className="nav-item font-bold">
              <a href="#about">ABOUT</a>
            </li>

            <li className="nav-item font-bold">
              <a href="#projects">PROJECTS</a>
            </li>

            <li className="nav-item font-bold">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className="h-7 overflow-hidden"
        >
          <div ref={labelRef}>
            <p className="font-bold text-lg">
              MENU
            </p>

            <p className="font-bold text-lg">
              X
            </p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;