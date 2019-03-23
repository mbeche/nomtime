import { db } from "../main";

export default {
  ADD_RECIPE: (state, recipe) => {
    state.recipes.push(recipe);
  },
  setRecipes(state, payload) {
    state.recipes = payload;
    payload.forEach(recipe => db.collection("recipes").add(recipe));
  }
};
