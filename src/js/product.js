import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product") || document.querySelector("#addToCart").dataset.id;

const product = new ProductDetails(productID, dataSource);
product.init();
