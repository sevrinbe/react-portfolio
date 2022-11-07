import React from "react";
import { skills } from "../../data";
const sevrinImage = require("../../img/sevrin.png");

export default function About() {
  return (
    <section id="about" className="h-full w-full">
      <div className=" mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Sevrin Eldred &nbsp;
            <br className="hidden lg:inline-block" />
            Full Stack Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            An individual who is eager to learn and provide the skills learned
            in Bootcamp to an employer.
          </p>
          <div className="flex justify-center"></div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={sevrinImage}
          />
        </div>
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
