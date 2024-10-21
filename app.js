import {
  generateRandomCharacters,
  generateRandomValues,
} from "./utils/values_generator.js";
import { calculateTimeout } from "./scripts/calculate_timeout.js";
import { onClick } from "./scripts/on_click.js";

document.addEventListener("DOMContentLoaded", function () {
  let isBreaking = false;
  const letterTags = document.getElementsByClassName("wordToChange");
  const button = document.getElementById("decryptButton");
  const missionTitle = document.getElementsByClassName("smallTitle")[0];
  const restarWords = ["marinheir", "d-b/tw;?/", "$z8xS)s!]"];
  const intervalsIds = [];

  const setButtonTitle = (text) => {
    button.innerHTML = text;
  };

  const setMissionTitile = (text) => {
    missionTitle.innerHTML = text;
  };

  const restartIndex = (index) => {
    const tags = Array.prototype.slice.call(letterTags);
    const restarWord =
      restarWords[generateRandomValues(0, restarWords.length - 1)];
    tags[index].innerHTML = restarWord[index];
  };

  const isLoadind = () => {
    return isBreaking;
  };

  const toogleIsBreaking = () => {
    isBreaking = !isBreaking;
  };

  const handleBreakingStart = () => {
    toogleIsBreaking();
    const tags = Array.prototype.slice.call(letterTags);

    tags.forEach((tag, index) => {
      intervalsIds[index] = setInterval(() => {
        tag.innerHTML = generateRandomCharacters();
      }, 80);

      setTimeout(() => {
        handleBreakingStop(index);

        if (index === tags.length - 1) {
          toogleIsBreaking();
          missionTitle.innerHTML = "Mission: Completed!";
          setButtonTitle("Decrypt");
        }
      }, calculateTimeout(index));
    });
  };

  const handleBreakingStop = (index) => {
    clearInterval(intervalsIds[index]);
    restartIndex(index);
  };

  onClick(() => {
    if (isLoadind()) {
      return;
    }

    handleBreakingStart();
    setButtonTitle("Decrypting...");
  }, "decryptButton");
});
