import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./listStyle.css";

import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import "bootstrap/dist/css/bootstrap.min.css";

export default function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  // eslint-disable-next-line 
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <>
      <div className="list" >
        <span className="listTitle">{list.title}</span>

        <div className="wrapper wrapper-desktop">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            {list.content.map((item, j) => (
              <ListItem key={j} index={j} item={item} />
            ))}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>

      </div>

      <div style={{marginLeft:"18px"}} className="wrapper-mobile container py-0 px-0 justify-content-center">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 0
            },
            350: {
              slidesPerView: 2.25,
              spaceBetween: 0
            },
            520: {
              slidesPerView: 3.2,
              spaceBetween: 0
            },
            650: {
              slidesPerView: 4.2,
              spaceBetween: 0
            }
          }}
        >

          <div className="container" ref={listRef}>
            {list.content.map((item, i) => (
              <SwiperSlide key={i}>
                <ListItem index={i} item={item} />
              </SwiperSlide>
            ))}
          </div>

        </Swiper>
      </div>
    </>
  );
}
