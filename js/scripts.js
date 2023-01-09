let recipeRepository = (function () {
  let recipeList = [
    {
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
    },
    {
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
    },
    {
      name: "Coconut Macaroons",
      category: "Dessert",
      baked: true,
      servings: 24,
      ingredients: ["coconut", "sweetened condensed milk", "vanilla"],
    },
    {
      name: "Crunchies",
      category: "Dessert",
      baked: false,
      servings: 24,
      ingredients: [
        "chocolate almond bars",
        "chow mein noodles",
        "slivered almonds",
      ],
    },
    {
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
    },
    {
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
    },
  ];

  function add(recipe) {
    if (
      typeof recipe === "object" &&
      "name" in recipe &&
      "category" in recipe &&
      "baked" in recipe &&
      "servings" in recipe &&
      "ingredients" in recipe
    ) {
      recipeList.push(recipe);
    } else {
      console.log("recipe is not valid");
    }
  }

  function getAll() {
    return recipeList;
  }

  function addListItem(recipe) {
    let repository = document.querySelector(".recipe-list");
    let listRecipe = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = recipe.name;
    button.classList.add("button-class");
    button.addEventListener("click", (Event) => showDetails(recipe));
    listRecipe.appendChild(button);
    repository.appendChild(listRecipe);
  }

  function showDetails(recipe) {
    console.log(recipe);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

recipeRepository.add({
  name: "Sugar Cookies",
  category: "Dessert",
  baked: true,
  servings: 36,
  ingredients: [
    "butter",
    "shortening",
    "powdered sugar",
    "white sugar",
    "eggs",
    "flour",
    "cream of tartar",
    "baking soda",
    "vanilla",
  ],
});

recipeRepository.getAll().forEach(function (recipe) {
  recipeRepository.addListItem(recipe);
});

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

// recipeList.forEach(function (recipe) {
//   let recipe_list = document.querySelector(".recipe-list");
//   let listRecipe = document.createElement("li");
//   let button = document.createElement("button");
//   button.innerText = recipe.name;
//   button.classList.add("button-class");
//   listRecipe.appendChild(button);
//   recipe_list.appendChild(listRecipe);
// });

// recipeList.forEach(function (recipe) {
//   if (recipe.baked) {
//     //document.write(recipe.name + " need to be baked in the oven.");
//   } else {
//    // document.write(recipe.name + " do not need to be baked in the oven.");
//   }
// });

// recipeList.forEach((recipe) => {
//   if (recipe.servings > 45) {
//     document.write(recipe.name + " makes a lot of cookies!");
//   }
// });
