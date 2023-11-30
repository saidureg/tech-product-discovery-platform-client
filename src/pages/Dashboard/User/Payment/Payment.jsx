import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <h3 className="text-4xl text-center text-[#151515] uppercase">Payment</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
