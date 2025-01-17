import { checkoutQuantity } from "../scripts/utils/cartUtils.js";


function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      if(!this.cartItems) {
      this.cartItems =
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
    },
  
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
    addToCart(productId, addQuantity) {
      let number1 = 0;
      number1 = Number(addQuantity.value);
      let matchingItem;
    
      this.cartItems.forEach((cartItem)=>{
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += number1;
      } else {
      this.cartItems.push({
        productId: productId,
        quantity: number1,
        deliveryOptionId: '1'
      });
    }    
    
     this.saveToStorage();
    },
  
    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem)=> {
        if(cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
      
      checkoutQuantity(this.cartItems);
      this.saveToStorage();
    },
  
    updateDeliveryOption(productId,                 deliveryOptionId) { 
      let matchingItem;
    
      this.cartItems.forEach((cartItem)=>{
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    },
  
    updateQuantity(productId, newQuantity) {
      let number = 0;
      number = Number(newQuantity.value);
      if (number<0 || number>100){
        number = 0;
      }
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        };
      });
     
      if(matchingItem) {
        matchingItem.quantity += number;
        const quantityLabel = document.querySelector(`.js-quantity-label`).innerHTML = matchingItem.quantity;
      
      };
      
      checkoutQuantity(this.cartItems);
      this.saveToStorage();
    }
  
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
businessCart.loadFromStorage();




console.log(cart);
console.log(businessCart);












