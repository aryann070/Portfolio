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
    // {
    //   title: "SQL",
    //   issuer: "Newton School",
    //   date: "March 2025",
    //   image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    //   link: "https://drive.google.com/",
    // },
    // {
    //   title: "Power BI",
    //   issuer: "Newton School",
    //   date: "March 2025",
    //   image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    //   link: "https://drive.google.com/",
    // },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
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
              <div className="bg-[#111827] rounded-xl overflow-hidden border border-white/10 
hover:border-blue-500/50 hover:bg-[#0f172a] hover:shadow-lg hover:shadow-blue-500/20 
transition-all duration-300">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
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
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}