import { renderListWithTemplate } from "./utils.mjs";

const pagePaths = {
  "880RR": "product_pages/?product=880RR",
  "985RF": "product_pages/?product=985RF",
  "985PR": "product_pages/?product=985PR",
  "344YJ": "product_pages/?product=344YJ",
};

function productCardTemplate(product) {
  const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;

  const discountPercentage = isDiscounted
    ? Math.round(
        ((product.SuggestedRetailPrice - product.FinalPrice) /
          product.SuggestedRetailPrice) *
          100,
      )
    : 0;

  return `
    <li class="product-card">
      <a href="${pagePaths[product.Id]}">
        <img src="${product.Image}" alt="${product.NameWithoutBrand}">
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">
          $${product.FinalPrice}
          ${
            isDiscounted
              ? `<span class="product-card__discount">${discountPercentage}% Off</span>`
              : ""
          }
        </p>
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
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    const visibleProducts = list.filter((product) => pagePaths[product.Id]);

    renderListWithTemplate(
      productCardTemplate,
      this.listElement,
      visibleProducts,
    );
  }
}