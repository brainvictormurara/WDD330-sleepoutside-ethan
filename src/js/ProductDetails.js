import { appUrl, getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = null;
    this.dataSource = dataSource;
  }

  async init() {
    this.product = this.productId
      ? await this.dataSource.findProductById(this.productId)
      : null;
    this.renderProductDetails();
  }

  addProductToCart() {
    if (!this.product) return;
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    const productElement = document.querySelector(".product-detail");
    if (!productElement) return;

    if (!this.product) {
      productElement.innerHTML = "<p>Product not found. Please select a product from a category.</p>";
      return;
    }

    productElement.innerHTML = productDetailsTemplate(this.product);

    const addToCartButton = document.getElementById("addToCart");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", this.addProductToCart.bind(this));
    }
  }
}

function productDetailsTemplate(product) {
  const imageUrl = appUrl(product.Images?.PrimaryLarge || product.Image || "");
  const brandName = product.Brand?.Name || "";
  const colorName = product.Colors?.[0]?.ColorName || "";

  return `<section class="product-detail">
    <h3>${brandName}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <picture>
      ${product.Images?.PrimaryExtraLarge ? `<source media="(min-width: 500px)" srcset="${appUrl(product.Images.PrimaryExtraLarge)}">` : ""}
      <img
        class="divider"
        src="${imageUrl}"
        alt="${product.NameWithoutBrand}"
      />
    </picture>
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${colorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
}
