import{l as a,g as s,r as c,a as l}from"./utils-BJ9fHqYo.js";a();function n(t){var r;return`
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${l(((r=t.Images)==null?void 0:r.PrimaryMedium)||t.Image||"")}" alt="${t.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${t.Name}</h2>
      </a>
      <p class="cart-card__color">${t.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${t.FinalPrice}</p>
    </li>
  `}class i{constructor(r,e){this.key=r,this.listElement=e}getItems(){const r=s(this.key);return Array.isArray(r)?r:[]}renderCartContents(){const r=this.getItems();if(r.length===0){this.listElement.innerHTML="<p>Your cart is empty.</p>";return}c(n,this.listElement,r)}}a();const o=new i("so-cart",document.querySelector(".product-list"));o.renderCartContents();
