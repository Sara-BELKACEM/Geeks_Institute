console.log("JavaScript is running!"); 

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const planetColors = {
    Mercury: 'gray',
    Venus: 'yellow',
    Earth: 'blue',
    Mars: 'red',
    Jupiter: 'brown',
    Saturn: 'gold',
    Uranus: 'lightblue',
    Neptune: 'darkblue'
};

let listPlanets = document.getElementsByClassName("listPlanets")[0];

planets.forEach(planet => {
    let divp = document.createElement("div");
    divp.classList.add("planet");
    divp.style.backgroundColor = planetColors[planet];

    listPlanets.appendChild(divp);
});