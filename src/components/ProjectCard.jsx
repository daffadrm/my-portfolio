import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto">
      <img
        onClick={() => handleModalInfo(project)}
        src={project.src}
        alt="project card"
        className="rounded-md duration-200 hover:scale-105 cursor-pointer"
      />
      <div className="flex items-center justify-center">
        {/* <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Demo
        </button>
        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Code
        </button> */}
        <h3 className="text-xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">
            {project.title}
          </h3>
      </div>
       {/* <div className="w-full text-white p-8 flex flex-col border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg">
          <h3 className="text-xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">
            {project.title}
          </h3>

          <ul>
            <li>
              <span className="text-primary-color">Description: </span>
              <span>{project.description}</span>
            </li>

            <li>
              <span className="text-primary-color">Technologies: </span>
              <span>{project.technologies} </span>
            </li>
          </ul>
        </div> */}
    </div>
  );
};

export default ProjectCard;
