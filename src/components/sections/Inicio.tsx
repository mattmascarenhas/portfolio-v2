"use client";
import FullStackDeveloper from "../images/FullStackDeveloper";
import GitHubIcon from "../icons/Github";
import LinkedinIcon from "../icons/Linkedin";
import InstagramIcon from "../icons/Instagram";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import WhatsAppIcon from "../icons/Whatsapp";

export function Inicio() {
  return (
    <div className="lg:flex lg:mx-[200px] items-center justify-between lg:mt-32 ">
      <div className="gridRight">
        <img src="img3.png" alt="" className="lg:w-[500px] hidden lg:flex" />
      </div>
      <div className="flex lg:mt-[150px] flex-col justify-center items-center">
        <FullStackDeveloper className="hidden lg:flex" />
        <img
          src="FullStackResponsive.png"
          alt=""
          width={400}
          className="lg:hidden "
        />
        <div className="flex lg:mt-[200px] mt-7 justify-center items-center ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#395b64] text-[#e7f6f2] p-5 text-2xl font-bold rounded-2xl"
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
