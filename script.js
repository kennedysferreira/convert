//currency cotation
const cotation = {
  USD: 5.5,
  EUR: 6.5,
  GPB: 7.5,
};

// DOM elements
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("footer");

// manipulating the input value for recive just numbers
amount.addEventListener("input", () => {
  const charRegex = /\D+/g;

  amount.value = amount.value.replace(charRegex, "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, cotation.USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, cotation.EUR, "€");
      break;
    case "BRL":
      convertCurrency(amount.value, cotation.GPB, "£");
      break;
  }
});

// function to convert currency
function convertCurrency(amount, price, symbol) {}
