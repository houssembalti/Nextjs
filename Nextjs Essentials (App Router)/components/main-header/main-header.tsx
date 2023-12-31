"use client";
import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";
import styles from "./mainheader.module.css";
import Image from "next/image";
import Mainheaderbackground from "./mainheaderbackground";
import NavLink from "./nav-link";
const Mainheader = () => {
  return (
    <React.Fragment>
      <>
        <Mainheaderbackground />
        <header className={styles.header}>
          <Link className={styles.logo} href="/">
            <Image src={LogoImg} alt="A plate with food on it" priority />
            NextLevel Food
          </Link>

          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink link="/meals">Browser Meals</NavLink>
              </li>
              <li>
                <NavLink link="/community">Foodies Community</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    </React.Fragment>
  );
};

export default Mainheader;
