"use client";
import React, { useState } from "react";

function Team() {
  const [expanded, setExpanded] = useState(false);
  const data =[
    {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium, natus dolor a consectetur culpa ipsam assumenda alias magnam maxime hic excepturi, dolores, doloribus rerum laborum commodi? Beatae, eligendi hic."
},]
  return (
    <>
      <div className="justify-center items-center text-center">
        <h1 className="text-3xl font-bold">Team</h1>
        <p className="text-2xl">Our Team Component</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          <div className="w-70 h-fit border-2  p-2 text-start rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in bg-white ease-in-out hover:bg-blue-100">
            <h2 className=" font-bold">
              Name : <span className="font-medium">Shubham</span>
            </h2>
            <h3 className=" font-bold">
              Role : <span className="font-medium">Frontend </span>
            </h3>
            <h3 className=" font-bold">
              Company Name : <span className="font-medium">xyz</span>
            </h3>
            <p>
              <span className="text-dark font-bold">Description: </span>Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              laudantium, natus dolor a consectetur
              {expanded && (
                <>
                  culpa ipsam assumenda alias magnam maxime hic excepturi,
                  dolores, doloribus rerum laborum commodi? Beatae, eligendi
                  hic.
                </>
              )}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-blue-400 cursor-pointer font-semibold"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="w-70 h-fit border-2  p-2 text-start rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in bg-white">
            <h2 className=" font-bold">
              Name : <span className="font-medium">Shubham</span>
            </h2>
            <h3 className=" font-bold">
              Role : <span className="font-medium">Frontend </span>
            </h3>
            <h3 className=" font-bold">
              Company Name : <span className="font-medium">xyz</span>
            </h3>
            <p>
              <span className="text-dark font-bold">Description: </span>Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              laudantium, natus dolor a consectetur
              {expanded && (
                <>
                  culpa ipsam assumenda alias magnam maxime hic excepturi,
                  dolores, doloribus rerum laborum commodi? Beatae, eligendi
                  hic.
                </>
              )}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-blue-400 cursor-pointer font-semibold"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="w-70 h-fit border-2  p-2 text-start rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in bg-white">
            <h2 className=" font-bold">
              Name : <span className="font-medium">Shubham</span>
            </h2>
            <h3 className=" font-bold">
              Role : <span className="font-medium">Frontend </span>
            </h3>
            <h3 className=" font-bold">
              Company Name : <span className="font-medium">xyz</span>
            </h3>
            <p>
              <span className="text-dark font-bold">Description: </span>Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              laudantium, natus dolor a consectetur
              {expanded && (
                <>
                  culpa ipsam assumenda alias magnam maxime hic excepturi,
                  dolores, doloribus rerum laborum commodi? Beatae, eligendi
                  hic.
                </>
              )}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-blue-400 cursor-pointer font-semibold"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
