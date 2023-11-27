import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
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
import { useEffect, useState } from "react";

import ReviewCard from "./ReviewCard";
import useReviews from "../../../../hooks/useReviews";

const ReviewForProduct = ({ id }) => {
  const [reviews] = useReviews();
  const [productReviews, setProductReviews] = useState([]);

  useEffect(() => {
    const filterReview = reviews?.filter(
      (product) => product?.product_id === id
    );
    setProductReviews(filterReview);
  }, [id, reviews]);
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <section className="text-white">
        <div className="text-center p-2 mb-4 rounded mt-10">
          <h3 className="mb-5 text-3xl font-bold text-[#ffcf00]">
            Total Review: {productReviews?.length}
          </h3>
        </div>

        <div className="md:hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
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
            {productReviews?.map((review, idx) => (
              <SwiperSlide key={idx}>
                <ReviewCard key={idx} review={review}></ReviewCard>
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

        <div className="hidden md:block">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
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
            {productReviews?.map((review, idx) => (
              <SwiperSlide key={idx}>
                <ReviewCard key={idx} review={review}></ReviewCard>
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
      </section>
    </div>
  );
};

ReviewForProduct.propTypes = {
  id: PropTypes.string,
};

export default ReviewForProduct;
