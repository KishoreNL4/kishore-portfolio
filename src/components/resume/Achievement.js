import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="South India Blockathon"
            subTitle=""
            result="Top 10"
            des="Participated in blockathon hosted by satyabhama college achieving a top 10 placement for the developed project "
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">--</p>
          <h2 className="text-4xl font-bold">--</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TNSI 2021"
            subTitle=""
            result="2021"
            des="A Business pitch for the selected idea ”Self Taught”. There are three rounds: selection of idea, 3 days
            boot comps and a final business pitch."
          />
          
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
