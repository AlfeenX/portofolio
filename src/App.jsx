import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="mx-auto">
      <Navbar />

      <Hero/>

      <About/>

      <Projects/>

      <Contact/>
    </main>
  );
};

export default App;
