"use client";
import FullStackDeveloper from "../images/FullStackDeveloper";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import WhatsAppIcon from "../icons/Whatsapp";
import PlanetIndex from "../images/PlanetIndex";

export function Inicio() {
  return (
    <div className="lg:flex lg:mx-[200px] gap-4 items-center justify-between lg:mt-24 ">
      <div className="">
        <img
          src="PlanetIndex.png"
          alt=""
          className="lg:w-[1200px] w-[400px] mt-6 lg:mt-0"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl text-zinc-600 text-center lg:text-justify">
              Desenvolvedor Back-end
            </h3>
            <h1 className="text-5xl font-bold text-center lg:text-justify">
              Matheus Mascarenhas
            </h1>
            <p className="text-justify mb-16 text-xl">
              Olá, sou desenvolvedor back-end especializado em C#/Asp.net e SQL
              Server, com experiência em criação e integração de APIs RESTful.
            </p>
          </div>
          <div className="flex flex-col mt-7 justify-center items-center ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#333333] text-[#e7f6f2] p-5 text-2xl font-bold rounded-3xl border-2 border-[#007CED]"
            >
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={200}
                style={{ color: "#ffffff" }}
              >
                Conheça meu portfólio
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7 lg:mt-7 mt-4">
          <a href="https://github.com/mattmascarenhas" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mattmascarenhas/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/mattmascarenhas/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://wa.me/5575991105310" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
