function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
      ingredients.push(ing1, ing2, ing3);}

    function displayJuice() {
      const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
      document.getElementById('juiceOrder').innerText = message;}

    addIngredients("orange", "apple", "banana");
    addIngredients("mint", "ginger", "pineapple");

    displayJuice();
}

makeJuice("large");
