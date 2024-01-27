import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
import { Autoplay, Pagination, Navigation } from "swiper"
import {
  Skeleton,
  List,
  Input,
  Dialog,
  NumberKeyboard,
  Toast,
  Rate,
  Space,
  Button
} from "antd-mobile"
import "./home.less"
import { toDp } from "@src/utils"
const SwiperStyle = {
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
function Home() {
  return (
    <div style={{ width: "3.75rem" }}>
      <div style={{ fontSize: "20px" }}>pageA</div>
      <div className="home-title">字号</div>
      <Swiper
        spaceBetween={0}
        // slidesPerView={1}
        speed={500}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide style={{ background: "green", ...SwiperStyle }}>
          Slide 1
        </SwiperSlide>
        <SwiperSlide style={{ background: "blue", ...SwiperStyle }}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide style={{ background: "yellow", ...SwiperStyle }}>
          Slide 3
        </SwiperSlide>
        <SwiperSlide style={{ background: "red", ...SwiperStyle }}>
          Slide 4
        </SwiperSlide>
      </Swiper>
      <div>
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
      </div>
      <div>
        <Rate onChange={val => Toast.show(val.toString())} />
      </div>
      <Rate allowHalf defaultValue={2.5} />
      <div style={{ height: "5rem", background: "blue" }}></div>
    </div>
  )
}
export default Home
