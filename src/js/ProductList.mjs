import { appUrl, renderListWithTemplate } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function productCardTemplate(product, category) {
  const imageUrl = appUrl(product.Images?.PrimaryMedium || product.Image || "");
  const brandName = product.Brand?.Name || "";
  const href = `${appUrl("product_pages/index.html")}?product=${encodeURIComponent(product.Id)}&category=${encodeURIComponent(category)}`;

  return `
    <li class="product-card">
      <a href="${href}">
        <img src="${imageUrl}" alt="${product.NameWithoutBrand}">
        <h3 class="card__brand">${brandName}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement, searchQuery = "") {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.searchQuery = searchQuery;
  }

  async init() {
    const list = this.searchQuery
      ? await this.dataSource.searchProducts(this.searchQuery)
      : await this.dataSource.getData(this.category);
    this.renderList(list);

    const title = document.querySelector(".products h2");
    if (title) {
      if (this.searchQuery) {
        title.textContent = `Search Results: ${this.searchQuery}`;
      } else {
        const formattedCategory = this.category
          ? this.category.charAt(0).toUpperCase() + this.category.slice(1)
          : "Products";
        title.textContent = `Top Products: ${formattedCategory}`;
      }
    }
  }

  renderList(list) {
    const products = Array.isArray(list) ? list : [];
    if (!products.length) {
      this.listElement.innerHTML = "<li>No products available.</li>";
      return;
    }
    renderListWithTemplate(
      (product) => productCardTemplate(product, this.category || "tents"),
      this.listElement,
      products,
      "afterbegin",
      true,
    );
  }
}
