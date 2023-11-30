import CouponCard from "./CouponCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useEffect } from "react";
import moment from "moment";
import { useState } from "react";
import useCoupon from "../../../hooks/useCoupon";

const CouponSection = () => {
  const [coupon] = useCoupon();

  const Today = moment().format("YYYY-MM-DD ");
  const [validCoupon, setValidCoupon] = useState([]);
  useEffect(() => {
    const find = coupon?.filter((item) => Today < item?.expiry_date);
    setValidCoupon(find);
  }, [Today, coupon]);

  return (
    <div>
      <div className=" max-w-6xl">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {validCoupon?.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CouponCard data={data} />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CouponSection;
