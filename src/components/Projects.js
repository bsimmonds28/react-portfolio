import React from "react";
import {projectlist} from "./Projectlist";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Projects
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {projectlist.map((projectlist) => (
                <a
                  href={projectlist.link}
                  key={projectlist.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={projectlist.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {projectlist.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {projectlist.title}
                      </h1>
                      <p className="leading-relaxed">{projectlist.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}