import { appUrl } from "./utils.mjs";

export function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = appUrl(`json/${encodeURIComponent(this.category)}.json`);
  }
  async getData() {
    const response = await fetch(this.path);
    // Vite may serve the HTML fallback for a missing public JSON file.
    if (response.status === 404 ||
        (response.ok && response.headers.get("content-type")?.includes("text/html"))) {
      return [];
    }
    const data = await convertToJson(response);
    return Array.isArray(data) ? data : Array.isArray(data?.Result) ? data.Result : [];
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
