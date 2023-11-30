import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const location = useLocation();
  const { state } = location;
  const paymentAmount = state?.paymentAmount || 1000;
  return (
    <div>
      <h3 className="text-4xl text-center text-[#151515] uppercase">Payment</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm paymentAmount={paymentAmount} />
      </Elements>
    </div>
  );
};

export default Payment;
