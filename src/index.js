function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe-container", {
    strings:
      "Need some pud inspiration? try searching for creme brulee, tiramisu, or bread and butter pudding",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let puddingRecipeFormElement = document.querySelector("#pudding-recipe-form");
puddingRecipeFormElement.addEventListener("submit", generateRecipe);
