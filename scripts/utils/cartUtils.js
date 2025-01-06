


export function checkoutQuantity(cart) {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const quantityElement = document.querySelector('.js-checkout-quantity');
  if (quantityElement) {
    quantityElement.innerHTML = cartQuantity;
  }
}