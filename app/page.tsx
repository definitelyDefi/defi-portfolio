import {Footer} from "@/components/Footer/Footer";
import {Introduce} from "@/components/Introduce/Introduce";
import {Header} from "@/components/Header/Header";
import {ProjectsCarousel} from "../components/Carousel/Carousel";
import classes from "./page.module.scss";
import movflix_preview from "./../assets/moflix_preview.png";
import {About} from "@/components/About/About";
import "./global.css";
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
      <div className={classes.container}>
        <Header />
        <main>
          <Introduce />
          <ProjectsCarousel projects={projects} />
          <About />
        </main>
      </div>
      <Footer />
    </>
  );
}
