<script>
import { mapMutations } from "vuex";
export default {
  name: "NewRecipeForm",
  data() {
    return {
      recipe: {},
      recipeTitle: "",
      recipeTime: ""
    };
  },
  methods: {
    ...mapMutations(["ADD_RECIPE"]),
    addRecipe: function() {
      const recipe = {};
      recipe["title"] = this.recipeTitle;
      recipe["readyInMinutes"] = this.recipeTime;
      console.log(recipe);
      this.ADD_RECIPE(recipe);
      this.recipe = {};
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addRecipe">
      Name:
      <input class="recipe-title" type="text" placeholder="Recipe Name" v-model="recipeTitle">
      Duration:
      <input
        class="recipe-time"
        type="text"
        placeholder="How long it takes to cook (minutes)"
        v-model="recipeTime"
      >
      <button type="submit" class="add-recipe-button">Submit</button>
    </form>
  </div>
</template>
