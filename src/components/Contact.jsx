import { TfiArrowTopRight } from "react-icons/tfi";
import { socialLinks, Techs } from "../../constants";

const Contact = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden gap-0 px-4 flex flex-col">
      <p className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-lg font-light tracking-[0.5em] font-geist whitespace-nowrap">
        Get in Touch
      </p>

      <div className="absolute top-1/2 left-[53%] transform -translate-x-1/2 -translate-y-1/2 flex items-center whitespace-nowrap">
        <h1 className="text-[150px] font-thunder leading-none">CONTACT ME</h1>
        <TfiArrowTopRight className="text-amber-500 shrink-0 m-0" size={100} />
      </div>

      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-3xl">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="px-4 py-2 rounded-md"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="absolute -right-100 bottom-0 -rotate-45 h-max flex items-center gap-4 backdrop-grayscale-75">
        {Techs.map((tech) => (
          <div
            key={tech.id}
            className="w-32 h-32 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${tech.image})` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
