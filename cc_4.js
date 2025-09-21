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

console.log(products);

// Step 4:

let customerType = ["regular", "student", "senior"];
let extraDiscount = 0;
if (customerType === "student") {
    extraDiscount = 0.05;
  } else if (customerType === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }


// Step 5:

for (let i = 1; i <= 3; i++) {
    customerType = ["regular", "student", "senior"][i - 1];
    extraDiscount = 0;
    if (customerType === "student") {
    extraDiscount = 0.05;
  } else if (customerType === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }


let subtotal = 0;
for (let product of products) {
    if (product.inventory > 0) {
        subtotal += Number(product.promoPrice);
        product.inventory--;
    }
}

let finalTotal = subtotal * (1 - extraDiscount);
console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);

};

const sample = products[0];
for (const key in sample) {
  console.log(`${key}: ${sample[key]}`);
};

// Step 7:
for (const product of products) {
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
        
    }
    
}

