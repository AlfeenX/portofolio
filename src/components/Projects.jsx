import {projects} from "../../constants/constant";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <section
          key={project.id}
          className="h-screen w-full relative flex justify-center items-center overflow-hidden gap-0 px-4"
        >
          <a
            href={project.githubUrl ?? "#"}
            className="absolute w-full inset-0 text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div
              className="absolute inset-0 opacity-80 flex-center flex-col"
              style={{ backgroundColor: project.color }}
            >
              <h1 className="text-white text-8xl font-bold font-geist">
                {project.title}
              </h1>
              <p className="text-white text-lg font-light font-geist">
                {project.description}
              </p>
            </div>
          </a>
        </section>
      ))}
    </>
  );
};

export default Projects;
