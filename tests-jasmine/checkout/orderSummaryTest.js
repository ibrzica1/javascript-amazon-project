import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

describe('tesz suite: renderOrderSummary', () => {
  it('displays the cart', () => {
    document.querySelector('js-test-container')
    .innerHTML = `
    <div class="js-order-summary"></div>
    `;
  })
});