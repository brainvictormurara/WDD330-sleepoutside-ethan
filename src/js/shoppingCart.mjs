import { appUrl, getLocalStorage, renderListWithTemplate } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function cartItemTemplate(item) {
  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${appUrl(item.Images?.PrimaryMedium || item.Image || "")}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>
  `;
}

export default class ShoppingCart {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  getItems() {
    const items = getLocalStorage(this.key);
    return Array.isArray(items) ? items : [];
  }

  renderCartContents() {
    const cartItems = this.getItems();

    if (cartItems.length === 0) {
      this.listElement.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    renderListWithTemplate(cartItemTemplate, this.listElement, cartItems);
  }
}
