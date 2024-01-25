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
import "./home.scss"
import { toDp } from "@src/utils"
const SwiperStyle = {
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
function Home() {
  return (
    <div style={{ width: "7.5rem", background: "red" }}>
      <div style={{ fontSize: toDp(20) }}>字体测试1</div>
      <div style={{ fontSize: "0.2rem" }}>字体测试2</div>
      <div style={{ fontSize: "20px" }}>字体测试3</div>
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
      <NumberKeyboard
        visible={true}
        showCloseButton={false}
        confirmText="确定"
      />
    </div>
  )
}
export default Home
