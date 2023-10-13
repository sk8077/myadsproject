import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/2  max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Pay Now</h2>
        <div className="text-center">
          <StripeCheckout
            token={onToken}
            name="Your Company Name"
            currency="INR"
            amount={90000000}
            stripeKey="pk_test_51NzwUtSAaTliDYi415FaOlAO2JAP6h952rG5s9aWrmrTVMpbBLxnrJI8GSYUqu5GXLDoUZ8RNRfrplX3PaLpGfdB00FxgFq0SE"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
