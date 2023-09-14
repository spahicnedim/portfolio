import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { sectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Progress, Typography } from "@material-tailwind/react";

const ServiceCard = ({ index, title, icon, progress }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.55)}
    className="w-full"
  >
    <div className="mb-2 flex items-center justify-between gap-2 mt-2">
      <Typography className={styles.sectionSubText} variant="h6">
        <div className="flex">
          <img src={icon} className="w-6 mr-2 h-6 object-contain" />
          {title}
        </div>
      </Typography>
      <Typography className={styles.sectionSubText} variant="h6">
        {progress}%
      </Typography>
    </div>
    <Progress
      className="border-none"
      variant="filled"
      color="deep-purple"
      value={progress}
    />
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-row gap-5">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full md:w-1/2 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="w-full md:w-1/2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
              progress={service.progress}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default sectionWrapper(About, "about");
