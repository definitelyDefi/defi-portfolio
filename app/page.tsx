import {Header} from "@/components/Header/Header";
import {ProjectsCarousel} from "../components/Carousel/Carousel";
import Image from "next/image";
import classes from "./page.module.scss";
import face from "./../assets/avatar_author.png";
import Link from "next/link";
import movflix_preview from "./../assets/moflix_preview.png";
import sidePhoto from "../assets/2.png";
import {Icon} from "@/components/Icon";
import footerImage from "@/assets/3.png";
import "./global.css";
import {
  Figma,
  Next,
  React as ReactIcon,
  Javascript,
  NodeJS,
  MongoDB,
  Sass,
  Python,
  WhatsApp,
  LinkedIn,
  Telegram,
  SmallArrowRight,
} from "@/components/Icons";

export default function Home() {
  let projects = [
    {
      name: "Moflix",
      tags: ["React", "External API", "Redux"],
      color: "#343a40",
      preview: movflix_preview,
      links: {
        github: "https://github.com/definitelyDefi/movflix",
        deploy: "https://definitelydefi.github.io/movflix/",
        info: "",
      },
    },
  ];

  return (
    <>
      <div style={{backgroundColor: "#FBFEFD", padding: "0px 100px"}}>
        <Header />
        <main>
          <div className={classes.introduce}>
            <Image src={face} alt="" width="128" />
            <h3>Hi, i’m Denys 🤙</h3>
            <p>
              I’m a junior <span style={{color: "#40C4FF"}}>frontend</span> developer driven by a passion for crafting
              flawless web experiences that delight users
            </p>
            <div className={classes.introduceButtons}>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/cv"}>
                Download CV <SmallArrowRight />
              </Link>
            </div>
          </div>
          <div className={classes.projects}>
            <ProjectsCarousel projects={projects} />
          </div>

          <h1>About me</h1>
          <div className={classes.about}>
            <div className={classes.flexAbout}>
              <div>
                <p className={classes.aboutDescription}>
                  My journey began with a thirst for learning, leading me to master HTML, CSS, and JavaScript. I thrive
                  on challenges, constantly expanding my skills through emerging technologies and best practices. While
                  my focus is frontend, I`ve also delved into backend, enhancing my ability to collaborate effectively
                  across the web development stack.{" "}
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
            <Image src={sidePhoto} width={500} alt="" style={{visibility: "visible"}} />
          </div>
        </main>
      </div>
      <footer className={classes.footer}>
        <div>
          <h1>Wanna contact?</h1>
          <p>Feel free to write me.</p>
          <a className={classes.email} href="mailto:defi.codes@gmail.com">
            defi.codes@gmail.com
          </a>
          <div className={classes.contacts}>
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
        <Image src={footerImage} width={400} alt="" />
      </footer>
    </>
  );
}
