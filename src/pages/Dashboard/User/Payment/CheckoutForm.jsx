import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CheckoutForm = ({ paymentAmount: totalPayment }) => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  // const totalPayment = 1000;
  useEffect(() => {
    if (totalPayment > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPayment })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPayment]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      // console.log("[paymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          price: totalPayment,
          date: new Date(),
          transactionId: paymentIntent.id,
          status: "paid",
        };

        const res = await axiosSecure.post("/payments", payment);
        navigate("/dashboard/userProfile");
        if (res.data) {
          toast.success("Payment Successful");
        }
      }
    }
  };
  return (
    <div className="mx-20 p-7 my-16 bg-white">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="my-10 btn btn-primary w-60"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">Your Transaction Id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

CheckoutForm.propTypes = {
  paymentAmount: PropTypes.number,
};
export default CheckoutForm;
