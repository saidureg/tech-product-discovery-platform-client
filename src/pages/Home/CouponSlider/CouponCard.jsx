import PropTypes from "prop-types";
import { CiBadgeDollar } from "react-icons/ci";
const CouponCard = ({ data }) => {
  return (
    <div className="bg-pink-400 border rounded-2xl md:w-3/4 lg:w-1/2 mx-auto mt-10">
      <div className="card-body  text-center">
        <div className="text-3xl font-bold mb-4 font-playfair">
          Get Special Discount!
        </div>
        <div className="border w-full border-white"></div>
        <div className="text-base mb-4">Use coupon code:</div>
        <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
          <span className="text-2xl font-semibold">{data?.coupon_code}</span>
        </div>

        <p className="text-white font-semibold text-lg">{data?.description}</p>

        <div className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] mx-auto rounded-full bg-white text-pink-500 mask mask-decagon">
          <div className="flex flex-col items-center justify-center py-8">
            <p className="font-medium font-playfair">Discount</p>
            <div className="flex font-bold">
              <p className="text-xl md:text-5xl">{data?.discount_amount}</p>
              <CiBadgeDollar className="md:text-2xl font-bold" />
            </div>
          </div>
        </div>

        <p className="text-white">Valid Until: {data?.expiry_date}</p>
        <p>Terms and conditions apply.</p>
      </div>
    </div>
  );
};
CouponCard.propTypes = {
  data: PropTypes.object,
};

export default CouponCard;
