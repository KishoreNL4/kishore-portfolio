import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  assetWarrenty,
  carsValley,
  Wedding,
  expento,
  petchain,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Asset Warranty"
          des="The Asset Warranty app allows users to scan product details stored on the blockchain, enabling local storage for easy access and management."
          src={assetWarrenty}
        />
        <ProjectsCard
          title="Cars Valley"
          des="Cars Valley is a Web3 app for secure buying and selling of cars, with condition and history verified by trusted third parties on the blockchain."
          src={carsValley}
        />
        <ProjectsCard
          title="Wedding Wows"
          des="A web app for event nominations and ticket booking, featuring CSR pages, Admin and Judges dashboards, and integrated ticket booking functionality."
          src={Wedding}
        />
        <ProjectsCard
          title="Vasthra"
          des="Vasthra is a decentralized e-commerce app for blockchain-verified sarees, enhancing trust and transparency by ensuring quality and authenticity in sales."
          src={projectTwo}
        />
        <ProjectsCard
          title="Pet Chain"
          des="A React Native mobile app for buying and selling pets, listing only blockchain-verified pets to ensure transparency and authenticity in transactions."
          src={petchain}
        />
        <ProjectsCard
          title="Expento"
          des="Expento is a web app designed for fast online shopping, featuring an intuitive interface, secure payments, and real-time order tracking for convenience."
          src={expento}
        />
      </div>
    </section>
  );
};

export default Projects;
