const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birthYear");
const homeWorldEl = document.getElementById("homeWorld");
const findBtn = document.getElementById("findBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function getCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${randomId}`;

  try {
    loading.classList.remove("hidden");
    error.classList.add("hidden");

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch character");

    const data = await res.json();
    const character = data.result.properties;

    const worldRes = await fetch(character.homeworld);
    const worldData = await worldRes.json();

    nameEl.textContent = data.result.properties.name;
    heightEl.textContent = character.height;
    genderEl.textContent = character.gender;
    birthYearEl.textContent = character.birth_year;
    homeWorldEl.textContent = worldData.result.properties.name;

  } catch (err) {
    error.classList.remove("hidden");
    console.error(err);
  } finally {
    loading.classList.add("hidden");
  }
}

findBtn.addEventListener("click", getCharacter);
