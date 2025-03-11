import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Info from "../Team/Members"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Team() {
  return (
    <section id="team" className="h-[600px] md:h-[900px] bg-gray-100 text-white flex justify-center items-center px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-10"
        >
          Meet Our Team
        </motion.h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {Info.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div
                className="w-full max-w-[250px] h-[350px] sm:max-w-[350px] md:max-w-[400px] md:h-[520px] mx-auto rounded-lg bg-cover bg-center shadow-lg flex flex-col justify-end p-4"
                style={{ backgroundImage: `url(${member.img})` }}
              >
                <div className="text-xs text-white sm:text-lg font-semibold bg-black/50 p-2 rounded-md text-center">
                  <p>{member.name}</p>
                  <p>{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Team;
