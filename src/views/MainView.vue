<script>
import { mapState, mapMutations } from "vuex";
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";
import LoadRecipeForm from "@/components/LoadRecipeForm";
import { db } from "../main";

export default {
  name: "MainView",
  components: {
    RecipeListEntry,
    NewRecipeForm,
    LoadRecipeForm
  },
  data() {
    return {
      recipes: [],
      recipe: {},
      recipeTitle: "",
      recipeTime: "",
      formMode: "add"
    };
  },
  firestore() {
    return {
      recipes: db.collection("recipes")
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
  <div class="main">
    <div class="actions"></div>
    <div class="left">
      <h2>Recipe List</h2>
      <ul>
        <li v-for="(recipe, index) in recipes" v-bind:key="index">
          <RecipeListEntry :recipe="recipe"/>
        </li>
      </ul>
    </div>
    <div class="right">
      <div v-on:click="formMode = 'find'">
        <img
          v-bind:class="{open: formMode === 'find'}"
          class="dropdown-triangle"
          src=".././assets/triangle.svg"
        >
        <h3>Find Recipes</h3>
      </div>
      <div v-show="formMode === 'find'">
        <LoadRecipeForm/>
      </div>
      <hr>
      <div v-on:click="formMode = 'add'">
        <img
          v-bind:class="{open: formMode === 'add'}"
          class="dropdown-triangle"
          src=".././assets/triangle.svg"
        >
        <h3>Create New Recipe</h3>
      </div>
      <div v-show="formMode === 'add'">
        <NewRecipeForm/>
      </div>
    </div>
  </div>
</template>

<style>
html,
#app,
.home {
  height: 100%;
}

body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.main {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "left actions"
    "left right";
  height: 100%;
}

input {
  border: none;
  padding: 15px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 10px;
  outline: none;
}

.right {
  text-align: left;
  padding: 30px;
}

.left {
  text-align: left;
  grid-area: left;
  overflow: scroll;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h2 {
  background: #2c3d50;
  color: #f9f9f9;
  padding: 10px 20px;
  margin: 0;
  box-sizing: border-box;
  height: 50px;
}

h3 {
  display: inline;
  vertical-align: middle;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}

.actions {
  grid-area: actions;
  height: 50px;
  margin: 0px;
  padding: 0px;
  background: #8a929c;
}

.add-recipe-button {
  box-shadow: 0 5px 5px lightgrey;
  float: right;
  text-transform: uppercase;
  background: #2c3d50;
  border: none;
  padding: 5px;
  margin: 10px;
  color: #f9f9f9;
  cursor: pointer;
}

.dropdown-triangle {
  transform: rotate(0deg);
  transition: transform 0.5s linear;
  vertical-align: middle;
  margin: 10px;
  width: 10px;
  height: 10px;
}

.dropdown-triangle.open {
  transform: rotate(90deg);
  transition: transform 0.5s linear;
}
</style>
