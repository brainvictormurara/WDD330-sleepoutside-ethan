import{g as c}from"./utils-_eg_pURR.js";function t(){const e=c("so-cart")||[];if(document.querySelector("#clearCart").hidden=e.length===0,e.length===0){document.querySelector(".product-list").innerHTML="<p>Your cart is empty.</p>";return}else{const r=e.map(a=>o(a));document.querySelector(".product-list").innerHTML=r.join("")}}function o(e){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="/WDD330-sleepoutside-ethan/${e.Image.replace(/^\.\//,"")}"
      alt="${e.Name}"
    />
    </a>
    <a href="#">
      <h2 class="card__name">${e.Name}</h2>
    </a>
    <p class="cart-card__color">${e.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${e.FinalPrice}</p>
  </li>`}t();document.querySelector("#clearCart").addEventListener("click",()=>{localStorage.removeItem("so-cart"),t()});
