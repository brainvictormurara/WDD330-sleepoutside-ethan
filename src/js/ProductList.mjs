import { renderListWithTemplate } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const pagePaths = {
  "880RR": "product_pages/marmot-ajax-3.html",
  "985RF": "product_pages/northface-talus-4.html",
  "985PR": "product_pages/northface-alpine-3.html",
  "344YJ": "product_pages/cedar-ridge-rimrock-2.html",
};

function productCardTemplate(product, category) {
  const imageUrl = product.Images?.PrimaryMedium || product.Image || "";
  const brandName = product.Brand?.Name || "";
  const productPage = pagePaths[product.Id];
  const href = productPage
    ? `${productPage}?product=${product.Id}&category=${category}`
    : "#";

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
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);

    const title = document.querySelector(".products h2");
    if (title) {
      const formattedCategory = this.category
        ? this.category.charAt(0).toUpperCase() + this.category.slice(1)
        : "Products";
      title.textContent = `Top Products: ${formattedCategory}`;
    }
  }

  renderList(list) {
    const visibleProducts = list.filter((product) => pagePaths[product.Id]);
    renderListWithTemplate(
      (product) => productCardTemplate(product, this.category),
      this.listElement,
      visibleProducts,
    );
  }
}