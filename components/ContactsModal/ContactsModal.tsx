"use client";
import Image from "next/image";
import classes from "./ContactsModal.module.scss";
import {useState} from "react";
import {Close} from "../Icons";
import {WhatsApp, Telegram, LinkedIn} from "../Icons";
import {Icon} from "../Icon";
import Link from "next/link";
type ModalProps = {
  isShow: boolean;
  setShow: Function;
};
export const ContactsModal = ({isShow, setShow}: ModalProps) => {
  const clickHandler = () => {
    setShow(false);
  };

  return (
    <div className={classes.modal} style={isShow ? {} : {display: "none"}}>
      <div className={classes.modal__closeButton} onClick={clickHandler}>
        <Close />
      </div>

      <div className={classes.modal__content}>
        <h1>Wanna contact?</h1>

        <a className={classes.modal__content_email} href="mailto:defi.codes@gmail.com">
          defi.codes@gmail.com
        </a>
        <div className={classes.modal__content_contacts}>
          <Link href={"https://wa.me/310649210596"}>
            {" "}
            <Icon text="" size="small">
              <WhatsApp />
            </Icon>
          </Link>
          <Link href={"https://www.linkedin.com/in/denys-bilyi-086462262/"}>
            {" "}
            <Icon text={""} size={"small"}>
              <LinkedIn />
            </Icon>
          </Link>
          <Link href={"https://t.me/definitelydefi"}>
            <Icon size={"small"} text={""}>
              <Telegram />
            </Icon>
          </Link>
        </div>
      </div>
    </div>
  );
};
