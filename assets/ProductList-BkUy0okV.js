import{l as h,r as l,a as s}from"./utils-BJ9fHqYo.js";h();function d(e,r){var c,o,n;const t=s(((c=e.Images)==null?void 0:c.PrimaryMedium)||e.Image||""),a=((o=e.Brand)==null?void 0:o.Name)||"";return`
    <li class="product-card">
      <a href="${`${s("product_pages/index.html")}?product=${encodeURIComponent(e.Id)}&category=${encodeURIComponent(r)}`}">
        <picture>
          ${(n=e.Images)!=null&&n.PrimaryLarge?`<source media="(min-width: 500px)" srcset="${s(e.Images.PrimaryLarge)}">`:""}
          <img src="${t}" alt="${e.NameWithoutBrand}">
        </picture>
        <h3 class="card__brand">${a}</h3>
        <h2 class="card__name">${e.NameWithoutBrand}</h2>
        <p class="product-card__price">$${e.FinalPrice}</p>
      </a>
    </li>
    `}class u{constructor(r,t,a,i=""){this.category=r,this.dataSource=t,this.listElement=a,this.searchQuery=i}async init(){const r=this.searchQuery?await this.dataSource.searchProducts(this.searchQuery):await this.dataSource.getData(this.category);this.renderList(r);const t=document.querySelector(".products h2");if(t)if(this.searchQuery)t.textContent=`Search Results: ${this.searchQuery}`;else{const a=this.category?this.category.charAt(0).toUpperCase()+this.category.slice(1):"Products";t.textContent=`Top Products: ${a}`}}renderList(r){const t=Array.isArray(r)?r:[];if(!t.length){this.listElement.innerHTML="<li>No products available.</li>";return}l(a=>d(a,this.category||"tents"),this.listElement,t,"afterbegin",!0)}}export{u as P};
