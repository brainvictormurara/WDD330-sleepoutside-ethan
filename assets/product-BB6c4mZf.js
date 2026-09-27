import{g as l,s as p,a as i,l as m,b as n}from"./utils-BJ9fHqYo.js";import{P as h}from"./ProductData-v9i53M_z.js";class g{constructor(r,a){this.productId=r,this.product=null,this.dataSource=a}async init(){this.product=this.productId?await this.dataSource.findProductById(this.productId):null,this.renderProductDetails()}addProductToCart(){if(!this.product)return;const r=l("so-cart")||[];r.push(this.product),p("so-cart",r)}renderProductDetails(){const r=document.querySelector(".product-detail");if(!r)return;if(!this.product){r.innerHTML="<p>Product not found. Please select a product from a category.</p>";return}r.innerHTML=P(this.product);const a=document.getElementById("addToCart");a&&a.addEventListener("click",this.addProductToCart.bind(this))}}function P(t){var e,o,s,d,c;const r=i(((e=t.Images)==null?void 0:e.PrimaryLarge)||t.Image||""),a=((o=t.Brand)==null?void 0:o.Name)||"",u=((d=(s=t.Colors)==null?void 0:s[0])==null?void 0:d.ColorName)||"";return`<section class="product-detail">
    <h3>${a}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <picture>
      ${(c=t.Images)!=null&&c.PrimaryExtraLarge?`<source media="(min-width: 500px)" srcset="${i(t.Images.PrimaryExtraLarge)}">`:""}
      <img
        class="divider"
        src="${r}"
        alt="${t.NameWithoutBrand}"
      />
    </picture>
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${u}</p>
    <p class="product__description">${t.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div>
  </section>`}m();const I=n("category")||"tents",$=new h(I),f=n("product"),y=new g(f,$);y.init();
