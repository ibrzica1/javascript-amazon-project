import { orders, loadOrders } from "../data/orders.js";
import { getProduct, loadProducts, products } from "../data/products.js";

//{productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', quantity: 4, estimatedDeliveryTime: '2025-02-24T14:52:32.506Z', variation: null}
loadProducts(() => {
  renderOrdersGrid();
});



function renderOrdersGrid() {
  let ordersHTML = '';

  orders.forEach((order) => {
let productsHTML = '';


order.products.forEach((product) => {

  const productId = product.productId;
  const matchingProduct = getProduct(productId);
  

productsHTML += `<div class="order-details-grid">
            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
              ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${product.estimatedDeliveryTime}
              </div>
              <div class="product-quantity">
                Quantity: ${product.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html?orderId=123&productId=456">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>`;
          

});
    ordersHTML += `
    <div class="order-container">
    <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${order.orderTime}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>${order.totalCostCents}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>
          ${productsHTML}
          
        </div>
    ` ;
    document.querySelector('.js-orders-grid').
  innerHTML = ordersHTML;
  
  });
}

renderOrdersGrid();

