const baseURL = import.meta.env.VITE_SERVER_URL || "https://wdd330-backend.onrender.com/";

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
  }

  async getData(category = this.category) {
    if (!category) return [];
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result || data;
  }

  async searchProducts(searchTerm) {
    const trimmedTerm = (searchTerm || "").trim();
    if (!trimmedTerm) return [];

    const response = await fetch(
      `${baseURL}products/search/${encodeURIComponent(trimmedTerm)}`,
    );
    const data = await convertToJson(response);
    return data.Result || data;
  }

  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result || data;
  }
}
