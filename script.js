function showAdvice(response) {
  console.log(response);
  let h2Element = document.querySelector("h2");
  h2Element.innerHTML = `"${response.data.slip.advice}"`;

  let h1Element = document.querySelector("h1");
  h1Element.innerHTML = `Advice #${response.data.slip.id}`;
}

function searchAdvice(event) {
  event.preventDefault();
  let id = Math.floor(Math.random() * 255);
  let apiUrl = `https://api.adviceslip.com/advice/${id}`;
  axios.get(apiUrl).then(showAdvice);
}

let selectDice = document.querySelector("#dice");
selectDice.addEventListener("click", searchAdvice);
