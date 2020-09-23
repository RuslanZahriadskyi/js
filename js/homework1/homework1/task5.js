const countryName = "КитаЙ";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0] + countryName.slice(1, 9); // Write code on this line
  switch (
    country
    // Write code under this line
  ) {
  }
}
if (country) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
