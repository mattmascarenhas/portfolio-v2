"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import MatheusMascarenhasResponsive from "../images/MatheusMascarenhasResponsive";
import MenuIcon from "../icons/MenuResponsive";
import { CSSTransition } from "react-transition-group";
import Dropdown from "../utils/Dropdown";
import CloseButton from "../icons/Close";

export function Header() {
  const headerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = headerRef.current
      ? (headerRef.current as HTMLDivElement).offsetHeight
      : 0;
    const offset = section ? section.offsetTop - headerHeight : 0;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div
      className={`flex items-center justify-between lg:px-[80px] pr-[16px] fixed top-0 left-0 w-[100%] z-[100] py-4 bg-[#222222]`}
    >
      <Link
        activeClass="active"
        to="inicio"
        spy={true}
        smooth={true}
        duration={200}
        style={{ cursor: "pointer" }}
      >
        <div className="flex lg:gap-5 gap-2 items-center mx-4 mt-3 cursor-default ">
          <Logo fill={`#007CED`} />
          <h1
            className={`hidden lg:flex lg:text-3xl lg:font-extrabold text-[#ffff]`}
          >
            MATHEUS MASCARENHAS
          </h1>
          <MatheusMascarenhasResponsive fill={`#ffff`} />
        </div>
      </Link>
      <div className="fixed right-0 pr-4 lg:hidden">
        <button className="p-1" onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon fill={`#ffff`} />
        </button>
      </div>
      <CSSTransition
        in={showMenu}
        timeout={500}
        classNames="menu-transition fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-95 z-30 "
        >
          <div className="fixed mx-12 justify-start my-5">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="mx-5 my-8 fixed right-0">
            <button onClick={() => setShowMenu(!showMenu)}>
              <CloseButton />
            </button>
          </div>
          <div className="fixed top-20 left-0 w-full h-full items-center justify-center flex-col flex gap-4 font-thin text-3xl ">
            <Dropdown dropMenu={() => setShowMenu(!showMenu)} />
          </div>
        </div>
      </CSSTransition>
      <ul className="hidden lg:flex lg:self-center lg:justify-center lg:gap-16 lg:list-none lg:text-2xl lg:font-bold lg:p-0">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
            className={"text-[#ffff]"}
          >
            ínicio
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
            className={"text-[#ffff]"}
          >
            portfólio
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("experiencia")}
        >
          <Link
            activeClass="active"
            to="experiencia"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
            className={"text-[#ffff]"}
          >
            experiência
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="tecnologias"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
            className={"text-[#ffff]"}
          >
            tecnologias
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            duration={200}
            style={{ cursor: "pointer" }}
            className={"text-[#ffff]"}
          >
            sobre
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
