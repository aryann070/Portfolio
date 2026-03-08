"use client";
import React, { useState } from "react";

export default function Team() {
  const teamData = [
    {
      name: "Shubham",
      role: "Frontend",
      company: "xyz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium, natus dolor a consectetur culpa ipsam assumenda alias magnam maxime hic excepturi, dolores, doloribus rerum laborum commodi? Beatae, eligendi hic."
    },
    {
      name: "Amit",
      role: "Backend",
      company: "abc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio libero velit quod aspernatur amet nihil ipsum perspiciatis illum laboriosam culpa."
    },
    {
      name: "Neha",
      role: "Designer",
      company: "pqr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime animi quia ducimus voluptate totam eligendi voluptates!"
    }
  ];

  // one expand state PER CARD
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getPreviewText = (text, isExpanded) => {
    const limit = 110;

    if (isExpanded || text.length <= limit) return text;

    return text.slice(0, limit) + "...";
  };

  return (
    <div className="justify-center items-center text-center">
      <h1 className="text-3xl font-bold">Team</h1>
      <p className="text-2xl">Our Team Component</p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="w-70 border-2 p-4 text-start rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white"
          >
            <h2 className="font-bold">
              Name : <span className="font-medium">{member.name}</span>
            </h2>

            <h3 className="font-bold">
              Role : <span className="font-medium">{member.role}</span>
            </h3>

            <h3 className="font-bold">
              Company Name : <span className="font-medium">{member.company}</span>
            </h3>

            <p className="mt-2">
              <span className="font-bold">Description: </span>
              {getPreviewText(member.description, expanded[index])}
            </p>

            {member.description.length > 110 && (
              <button
                onClick={() => toggleExpand(index)}
                className="mt-2 text-blue-500 font-semibold hover:underline"
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
