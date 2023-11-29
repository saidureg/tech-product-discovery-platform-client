import { useLoaderData } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";

const ViewCoupon = () => {
  const { coupon_code, discount_amount, expiry_date, description } =
    useLoaderData();
  return (
    <div className="md:w-96 mx-auto bg-pink-400 border rounded-tl-2xl rounded-br-2xl mt-6 lg:mt-24">
      <div className="card-body items-center text-center space-y-5">
        <h2 className="card-title text-white mt-4">
          Coupon Code:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
            {coupon_code}
          </span>
        </h2>
        <div className="border w-full border-white"></div>
        <p className="text-white font-semibold text-lg">{description}</p>
        <div className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full bg-white text-pink-500 mask mask-decagon">
          <div className="flex flex-col items-center justify-center py-8">
            <p className="font-medium font-playfair">Discount</p>
            <div className="flex font-bold">
              <p className="text-xl md:text-5xl">{discount_amount}</p>
              <CiBadgeDollar className="md:text-2xl font-bold" />
            </div>
          </div>
        </div>

        <p className="text-white">Valid Until: {expiry_date}</p>
      </div>
    </div>
  );
};

export default ViewCoupon;
