//currency cotation
const cotation = {
  USD: 5.5,
  EUR: 6.5,
  GBP: 7.5,
};

// DOM elements
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

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
    case "GBP":
      convertCurrency(amount.value, cotation.GBP, "£");
      break;
  }
});

// function to convert currency
function convertCurrency(amount, price, symbol) {
  try {
    const converted = (amount * price).toFixed(2).replace(".", ",");
    footer.classList.add("show-result");
    description.innerHTML = `${symbol} 1 = R$ ${price.toFixed(2)}`;
    result.innerHTML = `${converted} Reais`;
  } catch (error) {
    alert("Não foi possivel realizar a conversao");
  }
}
