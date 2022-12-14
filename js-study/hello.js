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

function sayHello() {
  console.log("나는 유준입니다.");
}

function getHuman(callback) {
  callback();
}

getHuman(sayHello);

setTimeout(function () {
  console.log("3초 뒤에 실행됩니다.");
}, 3000);

setInterval(function () {
  console.log("1초마다 출력됩니다.");
}, 1000);

function callbackFunc(name) {
  console.log(name);
}

function sayHello(callback) {
  var text = "hello";
  callback(text);
}

sayHello(callbackFunc);

sayHello(function (value) {
  console.log(value);
});

setTimeout(function () {
  console.log("3초 뒤 실행");
}, 3000);
console.log("실행");

var result = fetch("url address");
console.log(result);
result
  .then(function () {
    console.log("실행 완료");
  })
  .catch(function () {
    console.log("에러 발생");
  });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function () {
    console.log("response : ", response);
  })
  .catch(function () {
    console.log("error : ", error);
  });
console.log("바로 실행");
