export const cart = [{
  productId:
  'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 3,
}, {
  productId: 
  '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2,
}
];

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
