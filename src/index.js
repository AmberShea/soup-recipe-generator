function displayRecipe(response) {
    new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateRecipe(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "07b4o18620b3fb3dt57a04f9330d1c11";
    let prompt = `User instructions: Generate a recipe for ${instructionsInput.value} soup`;
    let context = "You are a culinary expert that can generate soup recipes of many flavors from around the world and using a variety of ingredients you can provide easy soup recipes in an organized format that have short ingredient lists and simple instructions in simple HTML format make sure to include the user instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ Generating a ${instructionsInput.value} soup recipe just for you! 😋</div>`;

    axios.get(apiUrl).then(displayRecipe);
    

}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);