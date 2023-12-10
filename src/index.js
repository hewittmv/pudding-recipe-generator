function displayRecipe(response) {
  new Typewriter("#recipe-container", {
    strings: [response.data.anwer],
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe-container", {
    strings: "Getting your recipe.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  let userInputElement = document.querySelector("#user-input");
  let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
  let context =
    "You are an AI pudding chef. The recipe must have a name using a <h2>, ingredients using a <li> and instructions using a <li>";
  let prompt = `Show a pudding recipe about ${userInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let puddingRecipeFormElement = document.querySelector("#pudding-recipe-form");
puddingRecipeFormElement.addEventListener("submit", generateRecipe);
