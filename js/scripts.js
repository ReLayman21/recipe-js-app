let recipeRepository = (function () {
  let recipeList = [];

  function getAll() {
    return recipeList;
  }
  function add(recipes) {
    recipeList.push(recipes);
  }
  return {
    getAll: getAll,
    add: add,
  };
})();

recipeRepository.add({
  name: "Chocolate Chip Cookies",
  category: "Dessert",
  baked: true,
  servings: 72,
  ingredients: [
    "shortening",
    "sugar",
    "brown sugar",
    "eggs",
    "flour",
    "baking soda",
    "salt",
    "milk chocolate chips",
  ],
});
recipeRepository.add({
  name: "Chocolate No Bake Cookies",
  category: "Dessert",
  baked: false,
  servings: 36,
  ingredients: [
    "sugar",
    "milk",
    "cocoa powder",
    "butter",
    "oatmeal",
    "coconut",
    "nuts",
  ],
});
recipeRepository.add({
  name: "Coconut Macaroons",
  category: "Dessert",
  baked: true,
  servings: 24,
  ingredients: ["coconut", "sweetened condensed milk", "vanilla"],
});
recipeRepository.add({
  name: "Crunchies",
  category: "Dessert",
  baked: false,
  servings: 24,
  ingredients: [
    "chocolate almond bars",
    "chow mein noodles",
    "slivered almonds",
  ],
});
recipeRepository.add({
  name: "Haystacks",
  category: "Dessert",
  baked: false,
  servings: 36,
  ingredients: [
    "butterscotch chips",
    "peanut butter",
    "mini marshmallows",
    "chow mein noodles",
  ],
});
recipeRepository.add({
  name: "Orange Cookies",
  category: "Dessert",
  baked: true,
  servings: 48,
  ingredients: [
    "shortening",
    "brown sugar",
    "eggs",
    "orange rind",
    "orange juice",
    "flour",
    "baking soda",
    "salt",
    "oatmeal",
    "coconut",
    "powdered sugar",
  ],
});

let recipeList = recipeRepository.getAll();

// for (let i = 0; i < recipeList.length; i++) {
//   if (recipeList[i].baked && "Dessert") {
//     document.write(recipeList[i].name + " need to be baked in the oven. ");
//   } else {
//     document.write(
//       recipeList[i].name + " do not need to be baked in the oven.   "
//     );
//   }
// }

// for (let j = 0; j < recipeList.length; j++) {
//   if (recipeList[j].servings > 45) {
//     document.write(recipeList[j].name + " recipe makes a lot of cookies! ");
//   }
// }

recipeList.forEach(function (recipe) {
  if (recipe.baked) {
    document.write(recipe.name + " need to be baked in the oven.");
  } else {
    document.write(recipe.name + " do not need to be baked in the oven.");
  }
});

recipeList.forEach((recipe) => {
  if (recipe.servings > 45) {
    document.write(recipe.name + " makes a lot of cookies!");
  }
});
