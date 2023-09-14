import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { bussines, bussinesInfo, linkedInURL } from "../constants";
import { heroFace } from "../assets";
const BusinessCard = () => {
  return (
    <>
      <Tilt className="xs:w-[450px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.75)}
          className="w-full bg-white p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-11 px-12 min-h-[280px] flex  flex-row">
            <div className="flex flex-col">
              {bussines.map((bus, index) => (
                <p
                  key={index}
                  className={`${styles.sectionSubText}text-white text-[20px] font-bold text-center pb-[24px] flex`}
                >
                  {bus}:
                </p>
              ))}
            </div>
            <div className="flex flex-col">
              {bussinesInfo.map((busInfo, index) => (
                <p
                  key={index}
                  className={`${styles.sectionSubText}text-white text-[20px] font-bold pb-[24px] flex justify-end px-auto`}
                >
                  {busInfo}
                </p>
              ))}
              <div
                onClick={() => window.open(linkedInURL, "_blank")}
                className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer mx-auto border-2 border-#804dee hover:rounded-md  transition-all  ease-linear"
              >
                <img
                  src={heroFace}
                  alt="heroFace"
                  className="w-full h-full rounded-full object-contain hover:rounded-none transition-all  ease-linear"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default SectionWrapper(BusinessCard, "");
