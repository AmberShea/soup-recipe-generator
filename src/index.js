function generateRecipe(event) {
    event.preventDefault();
    let recipeElement = document.querySelector("#recipe");
    new Typewriter("#recipe", {
      strings: ["The recipe will display here."],
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);