import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  const user = new User("Pablo");
  const nuevoProducto = new Product("fruta", 10);
  user.addProduct(nuevoProducto)
  t.is(user.name, "Pablo");
  t.is(user.products[0].name, "fruta");
  t.is(user.products[0].price, 10);
});
