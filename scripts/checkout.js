import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { cart } from "../data/cart.js";
//import '../data/cart-class.js';
import '../data/car.js';
//import '../data/backend-practice.js;'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=> {
      resolve();
    });
  })

]).then(()=> {
  renderPaymentSummary();
    renderOrderSummary();
    rendercheckoutHeader(cart);
});

/*
new Promise((resolve) => {
  loadProducts(()=> {
    resolve('value1');
  });

}) .then((value)=> {
  console.log(value);
  return new Promise((resolve)=>{
    loadCart(()=> {
      resolve();
    });
  });
}).then(()=>{
  renderPaymentSummary();
    renderOrderSummary();
    rendercheckoutHeader(cart);
});
*7
/*
loadProducts(()=>{
  loadCart(()=>{
    renderPaymentSummary();
    renderOrderSummary();
    rendercheckoutHeader(cart);
  });
});
*/
