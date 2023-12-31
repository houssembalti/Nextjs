import Link from "next/link";
import React from "react";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";
type NavLinkProps = {
  link: string;
  children: React.ReactNode;
};
const NavLink = (props: NavLinkProps) => {
  const path: string = usePathname();
  return (
    <Link
      href={props.link}
      className={
        path.startsWith(props.link)
          ? `${styles.active} ${styles.link}`
          : styles.link
      }
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
