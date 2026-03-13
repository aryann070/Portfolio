"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { ExternalLink } from "lucide-react";

export default function Achievements() {
  const certificates = [
    {
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "July 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?w=600",
      link: "https://drive.google.com/",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS Academy",
      date: "November 2024",
      image:
        "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=600",
      link: "https://drive.google.com/",
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
      title: "React Developer Certification",
      issuer: "SimpliLearn",
      date: "March 2025",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600",
      link: "https://drive.google.com/",
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
      title: "React Developer Certification",
      issuer: "SimpliLearn",
      date: "March 2025",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600",
      link: "https://drive.google.com/",
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