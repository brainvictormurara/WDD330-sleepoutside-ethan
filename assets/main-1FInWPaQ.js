import{r as i}from"./utils-_eg_pURR.js";import{P as c}from"./ProductData-ckpWzqDt.js";const r={"880RR":"product_pages/?product=880RR","985RF":"product_pages/?product=985RF","985PR":"product_pages/?product=985PR","344YJ":"product_pages/?product=344YJ"};function n(t){const e=t.FinalPrice<t.SuggestedRetailPrice,a=e?Math.round((t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100):0;return`
    <li class="product-card">
      <a href="${r[t.Id]}">
        <img src="${t.Image}" alt="${t.NameWithoutBrand}">
        <h3 class="card__brand">${t.Brand.Name}</h3>
        <h2 class="card__name">${t.NameWithoutBrand}</h2>
        <p class="product-card__price">
          $${t.FinalPrice}
          ${e?`<span class="product-card__discount">${a}% Off</span>`:""}
        </p>
      </a>
    </li>
    `}class o{constructor(e,a,s){this.category=e,this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){const a=e.filter(s=>r[s.Id]);i(n,this.listElement,a)}}const d=new c("tents"),l=document.querySelector(".product-list"),u=new o("Tents",d,l);u.init();
