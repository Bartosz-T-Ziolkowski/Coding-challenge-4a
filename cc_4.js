// Coding Challenge 04

// Code goes here

// Step 1: Create a new JavaScript file

// Step 2: Create an array of objects representing 5 products.

let products = [
    {
        name: "macbook air",
        category: "electronics",
        price: 1000,
        inventory: 50
    },
    {
        name: "black shirt",
        category: "apparel",
        price: 15,
        inventory: 100,
    },
    {
        name: "grapefruit",
        category: "groceries",
        price: 5,
        inventory: 25,
    },
    {
        name: "wooden table",
        category: "furniture",
        price: 150,
        inventory: 45,
    },
    {
        name: "set of forks",
        category: "silverware",
        price: 10,
        inventory: 30,
    }
]

// Step 3: Write a for...of loop that cycles through each product and applies a dynamic discount based on category.

for (let product of products) {
    let discount = 0;

switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "furniture":
            discount = 0.15;
            break;
        case "silverware":
            discount = 0.30;
            break;
        case "apparel":
            discount = 0.25;
            break;
        case "groceries":
            discount = 0.05;
            break;
        default:
            discount = 0;
    }

let promoPrice = product.price * (1-discount); 
product.promoPrice = promoPrice.toFixed(2);

}