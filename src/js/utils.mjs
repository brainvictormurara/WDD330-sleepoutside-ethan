// Local resources belong to the app root, even on nested pages.
export function appUrl(path) {
  if (!path || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^(?:\.\/|\/)+/, "")}`;
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const html = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, html.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if(callback) {
    callback(data);
  }
}

export async function loadTemplate(path){
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export function initHeaderSearch() {
  const form = document.querySelector(".search-form");
  if (!form) return;

  const input = form.querySelector("input[name=\"search\"]");
  const currentSearch = new URLSearchParams(window.location.search).get("search");
  if (input && currentSearch) {
    input.value = currentSearch;
  }
}

export async function loadHeaderFooter(){
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  if (headerElement) {
    renderWithTemplate(headerTemplate, headerElement, null, initHeaderSearch);
  }
  if (footerElement) {
    renderWithTemplate(footerTemplate, footerElement);
  }
}
