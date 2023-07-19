import { checkLoginStatus } from "./checkLoginStatus.js";


checkLoginStatus();

let quantity = 0;
let productList = [];
const addToCartBtn = document.getElementById("add-to-cart")
const cartQuantity = document.getElementById("cart-quantity")
const productListElm = document.getElementById("productList")

const handleAddToCart = (event) => {
    quantity +=1;
    cartQuantity.textContent = quantity;
    const productId = event.target.id; product_1;
    

};


addToCartBtn.addEventListener("click", handleAddToCart)

const handleGetProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const data = await res.json();
    productList = data.products;
  
    productList.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.setAttribute("class", "product-item");
      productItem.style.backgroundImage = `url(${product.thumbnail})`;
  
      const productName = document.createElement("h3");
      productName.setAttribute("class", "product-name");
      productName.textContent = product.title;
  
      const productPrice = document.createElement("span");
      productPrice.setAttribute("class", "product-price");
      productPrice.textContent = product.price;
  
      const addBtn = document.createElement("button");
      addBtn.setAttribute('id', `product_${product.id}`);
        addBtn.addEventListener('click', )
      productItem.appendChild(productName);
      productItem.appendChild(productPrice);
      productItem.appendChild(addBtn);
  
      productListElm.appendChild(productItem);
    });
  };
  
  handleGetProducts();