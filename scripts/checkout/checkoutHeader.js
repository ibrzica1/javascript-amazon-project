import { cart } from "../../data/cart.js";
import { checkoutQuantity } from "../utils/cartUtils.js";


export function rendercheckoutHeader(cart) {


let checkoutSummaryHTML = `Checkout (<a class="return-to-home-link js-checkout-quantity"
            href="amazon.html"></a>)`;

document.querySelector('.js-checkout-header')
.innerHTML = checkoutSummaryHTML;
checkoutQuantity(cart);
}