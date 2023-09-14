import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-y-7xl mx-auto flex flex-row items-center justify-center gap-5`}
      >
        <div>
          <h1 className="text-white font-black lg:text-[110px] sm:text-[90px] xs:text-[80px] text-[50px] lg:leading-[98px] mt-2">
            Hello, I`m <span className="text-[#915eff]">Nedim</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[40px] sm:text-[36px] xs:text-[30px] text-[26px] lg:leading-[40px]">
            I study Softvare Engineering and <br className="sm:block hidden" />{" "}
            develop web aplications
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
