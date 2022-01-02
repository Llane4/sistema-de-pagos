// src/pages/api/create-payment-intent.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY);

export default async function createPaymentIntent(req, res) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1400,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
