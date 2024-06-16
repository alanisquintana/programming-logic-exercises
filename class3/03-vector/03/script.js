/* 
You are developing an inventory control system for a store. Create a program that uses an array of products and an array of suppliers. Each product has information such as name, quantityStock, unitPrice, and available, and each supplier has information such as name, age, and providedProducts. The challenge is to find suppliers who meet certain criteria and filter available products with sufficient stock.

1- Find the first supplier aged between 25 and 40 who supplies at least two products.
2- Check if all the products provided by the found supplier are available.
3- Get a list of available products with stock equal to or greater than 10.
*/

const productsStock = [
  { name: "T-shirt", quantityStock: 15, unitPrice: 25, available: true },
  { name: "Shoes", quantityStock: 8, unitPrice: 80, available: true },
  { name: "Headphones", quantityStock: 5, unitPrice: 50, available: true }
];

const suppliers = [
  { name: "SupplierOne", age: 20, providedProducts: ["T-shirt", "Shoes"] },
  { name: "SupplierTwo", age: 35, providedProducts: ["Headphones"] },
  { name: "SupplierThree", age: 40, providedProducts: ["T-shirt", "Shoes", "Headphones"] }
];

 /* #1 */
const supplierFound = suppliers.find(supplier => supplier.age >= 25 && supplier.age <= 40 && supplier.providedProducts.length >= 2)

if (supplierFound) {
  console.log("#1: Supplier found:", supplierFound);
} else {
  console.log("Supplier not found.");
}

/* #2 */
const allProductsAvailable = supplierFound && supplierFound.providedProducts
  .every(providedItem => productsStock
  .find(stockItem => stockItem.name === providedItem)?.available)

/* #3 */
const availableProductsByQuantity = productsStock.filter(productsByQuantity => productsByQuantity.quantityStock >= 10)