"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { ExternalLink } from "lucide-react";

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "HTML",
      issuer: "IBM Skills Build",
      date: "Oct 2024",
      image:
        "/card/html.jpg",
      link: "/certificates/html.pdf",
    },
    {
      title: "CSS",
      issuer: "Great Learning Academy",
      date: "Dec 2024",
      image:
        "/card/css.png",
      link: "/certificates/css.pdf",
    },
    {
      title: "Javascript",
      issuer: "MIMO Learninig",
      date: "Jan 2025",
      image:
        "/card/js.jpg",
      link: "/certificates/js-mimo.pdf",
    },
    {
      title: "Javascript for Beginners",
      issuer: "Cursa",
      date: "March 2026",
      image:
        "/card/js1.jpg",
      link: "/certificates/js-cursa.pdf",
    },
    {
      title: "Tailwind CSS",
      issuer: "Mindluster",
      date: "March 2026",
      image:
        "/card/tailwind.png",
      link: "/certificates/tailwind.pdf",
    },
    {
      title: "Git and Github",
      issuer: "Geekster",
      date: "Dec 2024",
      image:
        "/card/github.jpg",
      link: "/certificates/github.pdf",
    },
     {
      title: "AI Tools Workshop",
      issuer: "Be 10X",
      date: "Mar 2026",
      image:
        "/card/ai1.jpg",
      link: "/certificates/ai-workshop.pdf",
    },
     {
      title: "AI for Business Professionals",
      issuer: "HP Life",
      date: "Feb 2026",
      image:
        "/card/ai2.jpg",
      link: "/certificates/ai-hp.pdf",
    },
  ];

  return (
    <section
  className="py-20 transition-colors duration-300"
  style={{ background: "var(--bg-secondary)" }}
>

  {/* Heading Container */}
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-14">
      <h2
        className="text-3xl sm:text-4xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Achievements &{" "}
        <span
          style={{
            background:
              "linear-gradient(to right,var(--gradient-start),var(--gradient-end))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Certifications
        </span>
      </h2>
    </div>
  </div>

  {/* FULL WIDTH SWIPER */}
  <div className="w-full">
    <Swiper
  modules={[Autoplay]}
  spaceBetween={24}
  loop={true}
  speed={3000}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: { slidesPerView: 1.2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
      {certificates.map((cert, index) => (
        <SwiperSlide key={index}>
          <div
            className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {cert.title}
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {cert.issuer}
              </p>

              <p
                className="text-xs mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}