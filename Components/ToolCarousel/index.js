import React from "react";
import {
  useState,
  useEffect,
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import back from "../../public/back.svg";
import next from "../../public/next.svg";
import earlyLinks from "../../public/early links.svg";
import guap from "../../public/guap zephyr 2.svg";
import exclusive from "../../public/exclusive aio bot.svg";
import release from "../../public/release channels.svg";
import videoTuts from "../../public/video tutorials.svg";
import voice from "../../public/live voice setup.svg";
import professional from "../../public/professional team.svg";



export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={30}
        naturalSlideHeight={40}
        totalSlides={7}
        visibleSlides={4.2}
        trayTag="section"
        infinite='true'
      >
        <h2 className="pt-4 pb-12 mainMargin text-center relative flex justify-between">
          <ButtonBack>
            <img src={back}></img>
          </ButtonBack>
          Ultimate Tools
          <ButtonNext>
            <img src={next}></img>
          </ButtonNext>
        </h2>

        <Slider>
          <Slide index={0}>
            <img src={earlyLinks} alt={`earlyLinks`} className="p-3"></img>
          </Slide>
          <Slide index={1}>
            <img src={guap} alt={`guap`} className="p-3"></img>
          </Slide>
          <Slide index={2}>
            <img src={exclusive} alt={`exclusive`} className="p-3"></img>
          </Slide>
          <Slide index={3}>
            <img src={release} alt={`release`} className="p-3"></img>
          </Slide>
          <Slide index={4}>
            <img src={videoTuts} alt={`video tutorials`} className="p-3"></img>
          </Slide>
          <Slide index={5}>
            <img src={voice} alt={`voice`} className="p-3"></img>
          </Slide>
          <Slide index={5}>
            <img src={professional} alt={`professional`} className="p-3"></img>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
