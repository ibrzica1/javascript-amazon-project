import { checkoutQuantity} from "../utils/cartUtils.js";
import { cart, removeFromCart, updateQuantity, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { calculateDeliveryDate, deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { isWeekend, skipWeekend } from "../utils/dates.js";
import { rendercheckoutHeader } from "./checkoutHeader.js";




export function renderOrderSummary() {
  let cartSummaryHTML = '';


  cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  const matchingProduct = getProduct(productId);

  checkoutQuantity(cart);

  const deliveryOptionId = cartItem.
  deliveryOptionId;

  const deliveryOption = getDeliveryOption(deliveryOptionId);

  
  const exerciseDayJS = dayjs().subtract(1,'month').format('dddd');

  cartSummaryHTML += `

  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: ${calculateDeliveryDate(deliveryOption)}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchingProduct.priceCents)}
        </div>
        <div class="product-quantity ">
          <span>
            Quantity: <span class="quantity-label link-primary js-quantity-label data-product-id="${matchingProduct.id}">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary
          js-update-quantity-link" data-product-id="${matchingProduct.id}">
            Update
          </span>
          <input class="quantity-input link-primary js-quantity-input" data-product-id="${matchingProduct.id}">
          <span class="save-quantity-link link-primary
          js-save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
          <span class="delete-quantity-link link-primary 
          js-delete-link" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        ${deliveryOptionsHTML(matchingProduct, cartItem)}
        
      </div>
       ${isWeekend(exerciseDayJS)}
    </div>
  </div>
  
  `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = '';

  deliveryOptions.forEach((deliveryOption)=> {
    const today = dayjs().add(1,'days');
    let deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    /*let checkWeekend = deliveryDate.format('dddd');
    deliveryDate = skipWeekend(checkWeekend); */
    
     const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const priceString = deliveryOption.priceCents === 0
    ? 'FREE'
    : `$${formatCurrency(deliveryOption.priceCents)} -`;

    const isChecked = deliveryOption.id === 
    cartItem.deliveryOptionId;

    html += `
      <div class="delivery-option js-delivery-option"
      data-product-id="${matchingProduct.id}"
      data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
            ${isChecked ? 'checked' : ''}
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                ${priceString} Shipping
              </div>
             
            </div>
          </div>
    `
  });

  return html;
  }

  document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
  .forEach((link)=> {
  link.addEventListener('click', ()=>{
    const productId = link.dataset.productId;
    removeFromCart(productId);
    
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();

    renderOrderSummary();
    renderPaymentSummary();
    rendercheckoutHeader(cart);
  });
  });

  document.querySelectorAll('.js-update-quantity-link')
  .forEach((link)=> {
  link.addEventListener('click', ()=> {
    const productId = link.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`);
      container.classList.add('is-editing-quantity');
      
  });
  });



  document.querySelectorAll('.js-save-quantity-link')
  .forEach((link)=> {
  link.addEventListener('click', ()=> {
    
    const productId = link.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
    const quantityInput = document.querySelector(`.js-quantity-input[data-product-id="${productId}"]`);  
    
      updateQuantity(productId, quantityInput);
      renderPaymentSummary();
  });
  });

  document.querySelectorAll('.js-delivery-option')
  .forEach((element)=> {
    element.addEventListener('click', () => {
      const {productId,deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}




