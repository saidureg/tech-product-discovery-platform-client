import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import slider from "../../../assets/product-discovery.jpg";
import useCoupon from "../../../hooks/useCoupon";
import { CiBadgeDollar } from "react-icons/ci";

const CouponSlider = () => {
  const [coupon] = useCoupon();
  return (
    <section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper mb-16"
      >
        {coupon?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="bg-pink-400 border rounded-2xl">
              <div className="card-body items-center text-center space-y-5">
                <h2 className="flex flex-col text-white mt-4">
                  Coupon Code:{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                    {item?.coupon_code}
                  </span>
                </h2>
                <div className="border w-full border-white"></div>
                <p className="text-white font-semibold text-lg">
                  {item?.description}
                </p>
                <div className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full bg-white text-pink-500 mask mask-decagon">
                  <div className="flex flex-col items-center justify-center py-8">
                    <p className="font-medium font-playfair">Discount</p>
                    <div className="flex font-bold">
                      <p className="text-xl md:text-5xl">
                        {item?.discount_amount}
                      </p>
                      <CiBadgeDollar className="md:text-2xl font-bold" />
                    </div>
                  </div>
                </div>

                <p className="text-white">Valid Until: {item?.expiry_date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CouponSlider;
