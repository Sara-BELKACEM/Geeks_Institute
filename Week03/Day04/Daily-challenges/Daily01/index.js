//bonus: AI HELP 
let currentInputs = {};

const templates = [
  (p, pl, v, a, n) => `${p} went to ${pl} to ${v} a ${a} ${n}.`,
  (p, pl, v, a, n) => `With a ${a} ${n}, ${p} decided to ${v} all the way to ${pl}.`,
  (p, pl, v, a, n) => `In ${pl}, ${p} found a ${a} ${n} and started to ${v}.`
];

document.getElementById("libform").addEventListener("submit", function(event){
    event.preventDefault();

    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    // console.log("Noun:", noun);
    // console.log("Adjective:", adjective);
    // console.log("Person:", person);
    // console.log("Verb:", verb);
    // console.log("Place:", place);
    if( !noun ||!adjective || !person || !verb || !place ){
        alert("Please fill in all the fields");
        return;
    }
    currentInputs = { noun, adjective, person, verb, place };
    displayRandomStory();

    // const story = `${person} went to the ${place} to ${verb} a very ${adjective} ${noun}.`;
    // document.getElementById("story").textContent = story;
});

document.getElementById("shuffle-button").addEventListener("click", function () {
  if (!currentInputs.person) {
    alert("Click 'Lib it!' first.");
    return;
  }
  displayRandomStory();
});

function displayRandomStory() {
  const { noun, adjective, person, verb, place } = currentInputs;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  const story = randomTemplate(person, place, verb, adjective, noun);
  document.getElementById("story").textContent = story;
  console.log("Story generated:", story); 
}