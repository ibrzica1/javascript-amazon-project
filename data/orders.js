

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
orders.unshift(order);
saveToStorage();
console.log(orders);
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function loadOrders(fun) {
  const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=> {
  orders = JSON.parse(xhr.response);

  console.log('load orders');

  fun();
});

xhr.addEventListener('error', (error)=>{
  console.log('Unexpected error. Please try again later.');
});

  xhr.open('GET', JSON.parse(localStorage.getItem('orders')));
  xhr.send();
}