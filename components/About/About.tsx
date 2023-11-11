import React from "react";
import sidePhoto from "@/assets/2.png";
import Image from "next/image";
import classes from "./About.module.scss";
import {Icon} from "../Icon";
import {
  Figma,
  Next,
  React as ReactIcon,
  Javascript,
  NodeJS,
  MongoDB,
  Sass,
  Python,
} from "@/components/Icons";
export function About() {
  return (
    <div>
      <h1 className={classes.about__title}>About me</h1>
      <div className={classes.about}>
        <div className={classes.flexAbout}>
          <div>
            <p className={classes.aboutDescription}>
              My journey began with a thirst for learning, leading me to master HTML, CSS, and JavaScript. I thrive on
              challenges, constantly expanding my skills through emerging technologies and best practices. While my
              focus is frontend, I`ve also delved into backend, enhancing my ability to collaborate effectively across
              the web development stack.{" "}
            </p>
            <h2>Skills</h2>
            <div className={classes.skills}>
              <Icon size="medium" text={"Figma"}>
                <Figma />
              </Icon>
              <Icon size="medium" text={"Next.js"}>
                <Next />
              </Icon>
              <Icon size="medium" text={"React"}>
                <ReactIcon />
              </Icon>
              <Icon size="medium" text={"Javascript"}>
                <Javascript />
              </Icon>
              <Icon size="medium" text={"NodeJS"}>
                <NodeJS />
              </Icon>
              <Icon size="medium" text={"MongoDB"}>
                <MongoDB />
              </Icon>
              <Icon size="medium" text={"SASS"}>
                <Sass />
              </Icon>
              <Icon size="medium" text={"Python"}>
                <Python />
              </Icon>
            </div>
          </div>
        </div>
        <Image
          src={sidePhoto}
          width={500}
          layout={"responsive"}
          alt=""
          className={classes.about__image}
          style={{
            visibility: "visible",
          }}
        />
      </div>
    </div>
  );
}
