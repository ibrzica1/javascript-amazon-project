import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { cart } from "../data/cart.js";
import '../data/cart-class.js';

renderPaymentSummary();
renderOrderSummary();
rendercheckoutHeader(cart);