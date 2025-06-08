const products = require('./products');

function findProductByName(name) {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  
  if (product) {
    console.log("Product found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`Product "${name}" not found.`);
  }
}

findProductByName("Laptop");
findProductByName("Sneakers");
findProductByName("Table"); 
