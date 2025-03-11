import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../../Utility/Utility";

const services = [
  {
    title: "Community Service",
    description: [
      "Rendering community service through education."
    ],
  },
  {
    title: "Youth Inspiration",
    description: [
      "Inspiring positively the young generation of Kambians."
    ],
  },
  {
    title: "Equal Rights Advocacy",
    description: [
      "Advocating for equal rights and opportunities for every student in Kambia District."
    ],
  },
  {
    title: "Community Health Service",
    description: [
      "Promoting health through advocacy and awareness creation."
    ],
  },
  {
    title: "Student Welfare",
    description: [
      "Seeking improved welfare for Kambia District students in institutions across Sierra Leone."
    ],
  },
  {
    title: "Unity & Oneness",
    description: [
      "Strengthening the spirit of oneness among Kambia indigenes and students."
    ],
  },
  {
    title: "Women & Girl Child Empowerment",
    description: [
      "Advocating for women's and girls' empowerment, recognition, protection, and respect for their fundamental human rights."
    ],
  },
];

export default function Service() {
  return (
    <section className="bg-gray-300 py-24 px-4 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-10"
        >
          Service of the Association
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div id="service" className="container mx-auto px-4 max-w-[1200px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-5 text-center w-full"
          >
            {/* Service Title */}
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              {service.title}
            </h2>

            {/* Service Description */}
            <p className="text-left text-sm text-gray-600">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
