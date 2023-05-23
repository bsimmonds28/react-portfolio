import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-left sm:text-4xl text-3xl mb-4 font-medium text-black">
                Hi, I'm Bethany.
                <br className="hidden lg:inline-block" />
                I love bringing apps to life.
              </h1>
              <p className="mb-8 text-left leading-relaxed">
              Nonprofit Professional and Full Stack Web Developer with a B.S. in Psychology from Haverford College and six years of experience in the nonprofit industry, including five years in marketing and communications. I started my career as an AmeriCorps Vista and now direct two departments at a national nonprofit. My strong work-ethic, project management skills, attention to detail, and creative problem-solving along with my drive to keep learning best practices have helped me successfully navigate new projects and roles. <b>I am ready to use the skills I’ve honed and what I learned at the University of Connecticut’s Coding Bootcamp in order to support your team.</b>
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/bethany-simmonds-28-/" target="_blank"
                  className="inline-flex text-white bg-zinc-600 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-800 rounded text-lg">
                  Linkedin
                </a>
                <a
                  href="https://github.com/bsimmonds28" target="_blank"
                  className="ml-4 inline-flex text-white bg-zinc-600 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-800 hover:text-white rounded text-lg">
                  Github
                </a>
                <a
                  href="#contact"
                  className="ml-4 inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 hover:text-white rounded text-lg">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./profile.jpg"
              />
            </div>
          </div>
        </section>
      );
}