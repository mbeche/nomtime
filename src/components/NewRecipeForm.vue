<script>
import { mapMutations } from "vuex";
import { db } from "../main";
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
    showRecipes(plan) {
      this.$store.dispatch("getRecipes", plan);
    },
    addRecipe: function() {
      const recipe = {};
      console.log(this.recipeTitle);
      console.log(this.readyInMinutes);
      db.collection("recipes").add({
        recipe: { label: this.recipeTitle, totalTime: this.recipeTime }
      });
      this.recipe = {};
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addRecipe">
      Name:
      <input
        class="recipe-title custom"
        type="text"
        placeholder="Recipe Name"
        v-model="recipeTitle"
      >
      Duration:
      <input
        class="recipe-time custom"
        type="number"
        placeholder="How long it takes to cook (minutes)"
        v-model.number="recipeTime"
      >
      <button type="submit" class="add-recipe-button">Submit</button>
    </form>
    <button @click="showRecipes('balanced')">Select This Plan</button>
  </div>
</template>
