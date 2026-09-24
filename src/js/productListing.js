import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const searchTerm = getParam("search") || "";
const category = getParam("category") || "tents";
const dataSource = new ProductData(category);
const listElement = document.querySelector(".product-list");
const myList = new ProductList(category, dataSource, listElement, searchTerm);
myList.init();