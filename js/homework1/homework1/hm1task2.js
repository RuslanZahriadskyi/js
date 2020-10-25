const invoice = 150;
const stock = 100;

// Write code under this line
const message =
  stock >= invoice
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
