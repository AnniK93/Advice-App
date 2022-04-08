function showAdvice(response) {
  let h2Element = document.querySelector("h2");
  h2Element.innerHTML = `"${response.data.slip.advice}"`;

  let h3Element = document.querySelector("h3");
  h3Element.innerHTML = `Advice #${response.data.slip.id}`;
}

function searchAdvice(event) {
  event.preventDefault();
  let apiUrl = "https://api.adviceslip.com/advice";
  axios.get(apiUrl).then(showAdvice);
}

let selectDice = document.querySelector("#dice");
selectDice.addEventListener("click", searchAdvice);
