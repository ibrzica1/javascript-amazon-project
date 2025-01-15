import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { cart } from "../data/cart.js";

renderPaymentSummary();
renderOrderSummary();
rendercheckoutHeader(cart);