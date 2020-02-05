const countProps = function(obj) {
  const keys = Object.keys(obj);

  console.log(keys.length);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

countProps({}); // 0

countProps({ name: "Mango", age: 2 }); // 2

countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3
