import{g as r,s as e,a as o}from"./utils-_eg_pURR.js";import{P as s}from"./ProductData-CSSwS-Sb.js";class c{constructor(a,d){this.productId=a,this.product={},this.dataSource=d}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addProductToCart.bind(this))}addProductToCart(){const a=r("so-cart")||[];a.push(this.product),e("so-cart",a)}renderProductDetails(){document.querySelector("main").innerHTML=i(this.product)}}function i(t){return`
    <section class="product-detail">
      <h3>${t.Brand.Name}</h3>

      <h2 class="divider">${t.NameWithoutBrand}</h2>

      <img
        class="divider"
        src="/WDD330-sleepoutside-ethan/${t.Image.replace(/^\.\//,"")}"
        alt="${t.NameWithoutBrand}"
      />

      <p class="product-card__price">$${t.FinalPrice}</p>

      <p class="product__color">${t.Colors[0].ColorName}</p>

      <p class="product__description">
        ${t.DescriptionHtmlSimple}
      </p>

      <div class="product-detail__add">
        <button id="addToCart" data-id="${t.Id}">
          Add to Cart
        </button>
      </div>
    </section>
  `}const n=new s("tents"),u=o("product")||document.querySelector("#addToCart").dataset.id,l=new c(u,n);l.init();
