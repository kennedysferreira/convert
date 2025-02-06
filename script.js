const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");

// manipulating the input value for recive just numbers
amount.addEventListener("input", () => {
  const charRegex = /\D+/g;

  amount.value = amount.value.replace(charRegex, "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  
});
