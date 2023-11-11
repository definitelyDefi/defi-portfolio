"use client";
import React, {useState} from "react";
import face from "@/assets/avatar_author.png";
import classes from "./Introduce.module.scss";
import Image from "next/image";
import Link from "next/link";
import {SmallArrowRight} from "../Icons";
import {ContactsModal} from "../ContactsModal/ContactsModal";
export function Introduce({}) {
  const [isShow, setShow] = useState(false);
  return (
    <div className={classes.introduce}>
      <ContactsModal isShow={isShow} setShow={setShow} />
      <Image src={face} alt="" width="128" />
      <h3>Hi, i’m Denys 🤙</h3>
      <p>
        I’m a junior{" "}
        <span
          style={{
            color: "#40C4FF",
          }}
        >
          frontend
        </span>{" "}
        developer driven by a passion for crafting flawless web experiences that delight users
      </p>
      <div className={classes.introduce__buttons}>
        <button
          className={classes.introduce__buttons__contact}
          onClick={() => {
            setShow(!isShow);
          }}
        >
          Contact
        </button>
        <Link className={classes.introduce__buttons__download} href={"/cv"}>
          Download CV <SmallArrowRight />
        </Link>
      </div>
    </div>
  );
}
