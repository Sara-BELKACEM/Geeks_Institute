const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("Morse object is empty");
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence").toLowerCase();
    const letters = input.split("");
    const morseResult = [];

    for (let char of letters) {
      if (morseJS[char]) {
        morseResult.push(morseJS[char]);
      } else {
        reject(`Character '${char}' is not supported in Morse`);
        return;
      }
    }

    resolve(morseResult);
  });
}

function joinWords(morseTranslation) {
  const output = document.getElementById("output");
  output.innerText = morseTranslation.join("\n"); 
}

function translateToMorse() {
  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch((error) => {
      document.getElementById("output").innerText = error;
    });
}