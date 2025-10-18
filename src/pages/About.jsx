// src/pages/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          About <span className="text-yellow-300">Hussaini IT Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mx-auto"
        >
          At Hussaini IT Services, we believe in empowering businesses with innovative,
          reliable, and scalable digital solutions — designed to help you grow faster and smarter.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="py-16 px-8 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="https://cdn.dribbble.com/users/926537/screenshots/4502924/media/96d11a3f90efb2a4b208de57e7b8a6a3.gif"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to bridge technology and creativity, Hussaini IT Services
              has evolved into a one-stop destination for web development and digital innovation.
            </p>
            <p className="text-gray-600">
              From small businesses to enterprise solutions, our team ensures that each project
              is crafted with precision, ensuring high performance and an engaging user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-50 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-blue-700 mb-6"
        >
          Our Mission & Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 max-w-3xl mx-auto mb-10"
        >
          We aim to simplify digital transformation for every business by delivering
          high-quality web solutions that are affordable, fast, and scalable. Our
          commitment to transparency, creativity, and client satisfaction sets us apart.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: "💡", title: "Innovation", desc: "We think beyond the obvious." },
            { icon: "🤝", title: "Integrity", desc: "We believe in honest collaboration." },
            { icon: "🚀", title: "Excellence", desc: "We strive for perfection in every project." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md p-8 rounded-xl w-72"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 md:px-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-blue-700 mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              name: "Hussain Ali Mesharwala",
              role: "Founder & Lead Developer",
              img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              name: "Nisrin Fatema",
              role: "Creative Director",
              img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
            },
            {
              name: "Tech Team",
              role: "UI/UX & Support Engineers",
              img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
