import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useCoupon from "../../../../hooks/useCoupon";
import { useState } from "react";

const UserProfile = () => {
  const { user } = useAuth();
  const [coupon, refetch] = useCoupon();
  const [paymentAmount, setPaymentAmount] = useState(1000);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  const handlePayment = (e) => {
    e.preventDefault();
    const form = e.target;
    const couponCode = form.coupon_code.value;

    const appliedCoupon = coupon.find(
      (data) => data.coupon_code === couponCode
    );

    if (appliedCoupon) {
      const discount = parseInt(appliedCoupon.discount_amount);
      const discountAmount = paymentAmount - discount;
      setPaymentAmount(discountAmount);
      refetch();
    } else {
      setPaymentAmount(1000);
    }

    form.reset();
  };

  return (
    <div className="flex justify-center items-center lg:h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl lg:w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>
          {payments.length > 0 ? (
            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              {" "}
              Subscription Member
            </p>
          ) : (
            ""
          )}

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              {payments.length > 0 ? (
                <div>
                  <p>
                    Membership Status:
                    <span className="p-1 px-2 text-xs text-white bg-[#af4053] rounded-lg mr-5">
                      {/*  */}
                      Verified
                    </span>
                  </p>
                </div>
              ) : (
                <div>
                  <form
                    onSubmit={handlePayment}
                    className="relative flex justify-center items-center my-4"
                  >
                    <input
                      name="coupon_code"
                      type="text"
                      placeholder="Coupon Code"
                      className="input input-bordered w-11/12 md:w-full max-w-md text-[#0B0B0B66]"
                    />
                    <button className="py-3 px-5 bg-[#FF444A] rounded-r-lg text-white  absolute right-[10px] md:right-[2px] lg:right-[3px]">
                      Apply
                    </button>
                  </form>
                  <Link
                    to={{
                      pathname: "/dashboard/payment",
                      state: { paymentAmount },
                    }}
                  >
                    <button className="bg-[#F43F5E] px-10 py-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block">
                      Subscribe <span>{paymentAmount}</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
