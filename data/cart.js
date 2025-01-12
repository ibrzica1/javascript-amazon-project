import { checkoutQuantity } from "../scripts/utils/cartUtils.js";

export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart) {
cart =
[{
  productId:
  'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 3,
  deliveryOptionId: '1'
}, {
  productId: 
  '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2,
  deliveryOptionId: '2'
}]; 
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, addQuantity) {
  let number1 = 0;
  number1 = Number(addQuantity.value);
  let matchingItem;

  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += number1;
  } else {
  cart.push({
    productId: productId,
    quantity: number1,
    deliveryOptionId: '1'
  });
}    

saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem)=> {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  
  checkoutQuantity(cart);
  saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  let number = 0;
  number = Number(newQuantity.value);
  if (number<0 || number>100){
    number = 0;
  }
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    };
  });
 
  if(matchingItem) {
    matchingItem.quantity += number;
    const quantityLabel = document.querySelector(`.js-quantity-label`).innerHTML = matchingItem.quantity;
  
  };
  
  checkoutQuantity(cart);
  saveToStorage();
}
