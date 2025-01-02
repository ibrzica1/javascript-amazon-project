export const cart = [];

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
    quantity: number1
  });
}    
}
