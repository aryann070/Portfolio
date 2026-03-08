"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Award, ExternalLink } from "lucide-react";

gsap.registerPlugin(Draggable);

function Achievements() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);
  const draggableRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const certificatesWidth = scrollRef.current.scrollWidth / 2;
      const containerWidth = containerRef.current.offsetWidth;

      if (certificatesWidth > containerWidth) {
        tweenRef.current = gsap.to(scrollRef.current, {
          xPercent: -50,
          repeat: -1,
          ease: "none",
          duration: 20,
        });

        draggableRef.current = Draggable.create(scrollRef.current, {
          type: "x",
          bounds: {
            minX: containerWidth - certificatesWidth * 2,
            maxX: 0,
          },
          edgeResistance: 0.8,
          inertia: true,
          onDrag: function () {
            tweenRef.current?.pause();
          },
          onThrowComplete: function () {
            tweenRef.current?.resume();
          },
        })[0];
      }
    }

    return () => {
      tweenRef.current?.kill();
      draggableRef.current?.kill();
    };
  }, []);

  const pauseScroll = useCallback(() => {
    tweenRef.current?.pause();
  }, []);

  const resumeScroll = useCallback(() => {
    tweenRef.current?.resume();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mouseenter", pauseScroll);
      el.addEventListener("mouseleave", resumeScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", pauseScroll);
        el.removeEventListener("mouseleave", resumeScroll);
      }
    };
  }, [pauseScroll, resumeScroll]);

  const certificates = [
    {
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "July 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?w=600",
      link: "https://drive.google.com/",
      badge: "https://www.credly.com/",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS Academy",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=600",
      link: "https://drive.google.com/",
      badge: "https://www.credly.com/",
    },
    {
      title: "React Developer Certification",
      issuer: "SimpliLearn",
      date: "March 2025",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600",
      link: "https://drive.google.com/",
    },
    {
      title: "SQL",
      issuer: "Newton School",
      date: "March 2025",
      image: "https://via.placeholder.com/600x400",
      link: "https://drive.google.com/",
    },
    {
      title: "Power BI",
      issuer: "Newton School",
      date: "March 2025",
      image: "https://via.placeholder.com/600x400",
      link: "https://drive.google.com/",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-12">
          Achievements &{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div ref={scrollRef} className="flex gap-6 w-max">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mb-3">{cert.date}</p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
