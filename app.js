import { generateRandomValue } from "./utils/values_generator";

document.addEventListener("DOMContentLoaded", function () {
  const letterTags = document.getElementsByClassName("wordsToChange");

  for (let letterTag of letterTags) {
    const value = letterTag.innerHTML.trim();

    //Gerar um novo valor aleatorio
    const randomValue = generateRandomValue();
    console.log(randomValue);

    //colocar o novo valor aleatorio varia vezes
  }
  // document.getElementsByClassName('mainWord')[0].style.color = 'blue';
});
