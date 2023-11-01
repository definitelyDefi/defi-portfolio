"use client";
import React from "react";
import Image, {StaticImageData} from "next/image";
import classes from "./Carousel.module.scss";
import "swiper/css";
import {useRef, useState, useEffect} from "react";
import {Swiper as Carousel, SwiperSlide} from "swiper/react";
import {Swiper} from "swiper/types";
import {Github, Deploy, ArrowLeft, ArrowRight} from "../Icons";
import Link from "next/link";
interface Project {
  name: string;
  tags: Array<string>;
  color: string;
  preview: StaticImageData;
  links: {
    github: string;
    deploy: string;
    info: string;
  };
}
type CarouselProps = {
  projects: Array<Project>;
};
export function ProjectsCarousel(props: CarouselProps) {
  const swiperRef = useRef<Swiper | undefined>(undefined);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  console.log(swiperRef.current);
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsFirstSlide(swiperRef.current.isBeginning);
      setIsLastSlide(swiperRef.current.isEnd);
    }
  };
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
    }
  }, []);

  return (
    <div className={classes.carousel}>
      <h1 className={classes.carousel__title}>Last projects</h1>
      <Carousel
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={false}
        navigation={{
          nextEl: ".arrowRight",
          prevEl: ".arrowLeft",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        {props.projects.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={classes.carousel__body}>
                <h2 className={classes.carousel__body_title}>{item.name}</h2>
                <p className={classes.carousel__body_tags}>
                  {" "}
                  {item.tags.map((tag, i) => (
                    <span className={classes.carousel__body_tags__tag} key={i}>
                      {tag}
                    </span>
                  ))}
                </p>

                <div>
                  <Image
                    style={{
                      border: `23px solid ${item.color}`,
                      borderRadius: "18px",
                    }}
                    src={item.preview}
                    alt="image"
                    width={393}
                    height={212}
                  />
                </div>
                <div className={classes.carousel__body_links}>
                  <Link href={item.links.github}>
                    Github <Github />
                  </Link>
                  <Link href={item.links.deploy}>
                    Deploy <Deploy />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Carousel>
      {props.projects.length < 3 ? null : (
        <div className={classes.carousel__navigation}>
          <button
            onClick={() => (swiperRef.current ? swiperRef.current.slidePrev() : null)}
            className={`${classes.carousel__navigation_arrowLeft} ${
              isFirstSlide ? classes.carousel__navigation_disabledArrow : ""
            }`}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => (swiperRef.current ? swiperRef.current.slideNext() : null)}
            className={`${classes.carousel__navigation_arrowRight} ${
              isLastSlide ? classes.carousel__navigation_disabledArrow : ""
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
