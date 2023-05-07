import React from "react";
import { slist } from "./Slist";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 pt-20 pb-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {slist.map((slist) => (
            <div key={slist.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {slist.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}