const products = [
  { id: 1, name: "P1", price: 25 },
  { id: 2, name: "P2", price: 45 },
  { id: 3, name: "P3", price: 30 },
];
const cart = {};
const addToCart = (id) => {
  // const score = {};
  // score["maths"] = 95;
  // score["maths"] = score["maths"] + 2
  // console.log(score);
  cart[id] = 1;
  showCart();
};
const increment = (id) => {
  cart[id] = cart[id] + 1;
  showCart();
};
const decrement = (id) => {
  cart[id] = cart[id] - 1;
  cart[id] < 1 && delete cart[id];
  console.log(cart);
  showCart();
};
const showTotal = () => {
  let total = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ? cart[value.id] : 0);
  }, 0);

  divTotal.innerHTML = `Order Value: $${total}`;
};

const showCart = () => {
  let str = "";
  products.map((value) => {
    if (cart[value.id]) {
      str += `
      <li>${value.name} - $ ${value.price} - <button onclick='decrement(${
        value.id
      })'> - </button> ${cart[value.id]} <button onclick='increment(${
        value.id
      })'> + </button> - $ ${value.price * cart[value.id]}</li><br>
      `;
    }
  });
  divCart.innerHTML = str;
  let count = Object.keys(cart).length;
  items.innerHTML = count;
  showTotal();
};
const displayCart = () => {
  //divCartBlock.style.display = "block"
  divCartBlock.style.left = "70%";
}
const hideCart = () => {
  //divCartBlock.style.display = "none"
  divCartBlock.style.left = "100%";
}
const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `
    <li>${value.id} - ${value.name} - ${value.price} - <button onclick=addToCart(${value.id})>Add to Cart</button></li><br>
    `;
  });
  divProducts.innerHTML = str;
};
