import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />

      <Hero/>

      <div
        className="
          relative
          z-50
          bg-white
          mt-[-100vh]
        "
      ></div>

      <About/>

      <Projects/>

      <Contact/>
    </main>
  );
};

export default App;
