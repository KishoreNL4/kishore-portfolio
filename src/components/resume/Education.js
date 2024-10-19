import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. Electronics and Communication Engineering"
            subTitle="Sri Eshwar College of engineering (2018-2022)"
            result="7.5 CGPA"
            des="The training provided by college in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="12th Standard"
            subTitle="Sri Vidya mandir higher secondary school (2016 - 2018)"
            result="7.2 CGPA"
            des="Bio/Maths Group"
          />
          <ResumeCard
            title="10th Standard"
            subTitle="Sri Vidya mandir higher secondary school (2015 -2016)"
            result="9.6 CGPA"
            des="Secondary education in Maths, Science, Social Science, English, Tamil"
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
