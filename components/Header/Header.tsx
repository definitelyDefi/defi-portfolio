import React from "react";
import {Logo} from "../Icons";
import classes from "./Header.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
        <Link className={classes.logoLink} href={"/"}>
          defi.codes
        </Link>
      </div>
      <div className={classes.links}>
        {/* <Link className={classes.logoLink} href={"/projects"}>
         Projects
        </Link>
        <Link className={classes.logoLink} href={"/contacts"}>
         Contacts
        </Link>
        <Link className={classes.logoLink} href={"/cv"}>
         CV
        </Link> */}
      </div>
    </header>
  );
}
