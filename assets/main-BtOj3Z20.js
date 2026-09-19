import{r as c}from"./utils-_eg_pURR.js";import{P as i}from"./ProductData-CSSwS-Sb.js";const r={"880RR":"product_pages/marmot-ajax-3.html?product=880RR","985RF":"product_pages/northface-talus-4.html?product=985RF","985PR":"product_pages/northface-alpine-3.html?product=985PR","344YJ":"product_pages/cedar-ridge-rimrock-2.html?product=344YJ"};function n(t){const e=t.FinalPrice<t.SuggestedRetailPrice,a=e?Math.round((t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100):0;return`
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
    `}class o{constructor(e,a,s){this.category=e,this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){const a=e.filter(s=>r[s.Id]);c(n,this.listElement,a)}}const d=new i("tents"),l=document.querySelector(".product-list"),u=new o("Tents",d,l);u.init();
