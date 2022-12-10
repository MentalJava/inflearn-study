function returnProducts(products) {
  var newProducts = [];
  for (var i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;
    if (price > 60000) {
      newProducts.push(product);
    }
  }
  return newProducts;
}
