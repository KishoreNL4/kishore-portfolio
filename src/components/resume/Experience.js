import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Securekloud Technologies Lts - (July 2022 - Present)"
            result="Chennai, Tamilnadu, India"
            des="I am an experienced web developer proficient in
converting Web2 applications to Web3
applications on the XDC private blockchain.
Leveraging my skills in React and Next.js, I have
developed a range of full-stack applications,
including an asset warranty system for tracking
assets, Cars Valley, a secondhand car
marketplace, and Vasthra, a blockchain-based
e-commerce platform specializing in saree sales.
Additionally, I excel in deploying and
maintaining applications within the AWS Virtual
Machine environment, ensuring smooth
operation and reliability.
."
          />
          <ResumeCard
            title="AWS Internship"
            subTitle="Securekloud Technologies Lts - (Dec 2021 - June 2022)"
            result="Chennai, Tamilnadu, India"
            des="I have a solid track record of successfully
completing API development tasks using Python.
My proficiency extends to working with SQL
databases, where I excel in executing tasks
involving precise data retrieval, manipulation, and
optimization. Additionally, I have hands-on
experience with various AWS services, including
EC2 for scalable computing, RDS for managed
relational databases, Lambda for serverless
computing, as well as expertise in creating IAM
roles and S3 bucket management
."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
