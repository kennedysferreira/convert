const amount = document.querySelector("#amount");

// manipulating the input value for recive just numbers
amount.addEventListener("input", () => {
  const charRegex = /\D+/g;

  amount.value = amount.value.replace(charRegex, "");
})