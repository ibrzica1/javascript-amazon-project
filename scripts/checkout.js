import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { cart } from "../data/cart.js";
//import '../data/cart-class.js';
import '../data/car.js';
import '../data/backend-practice.js'


renderPaymentSummary();
renderOrderSummary();
rendercheckoutHeader(cart);