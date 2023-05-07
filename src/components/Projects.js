import React from "react";
import {projectlist} from "./Projectlist";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-zinc-900 body-font">
          <div className="container px-5 py-20 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-10">
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
                      className="absolute inset-0 rounded w-full h-full object-cover object-center"
                      src={projectlist.image}
                    />
                    <div className="px-8 py-10 relative z-10 rounded w-full border-4 border-zinc-200 bg-zinc-800 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-teal-800 mb-1">
                        {projectlist.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-teal-600 mb-3">
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