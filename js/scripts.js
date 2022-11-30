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

for (let i = 0; i < recipeList.length; i++) {
  if (recipeList[i].baked && "Dessert") {
    document.write(recipeList[i].name + " are baked in the oven");
  } else {
    document.write(recipeList[i].name + " do not need to be baked in the oven");
  }
}
