<script>
import { mapState } from "vuex";
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";

export default {
  name: "MainView",
  components: {
    RecipeListEntry,
    NewRecipeForm
  },
  computed: {
    ...mapState({
      recipes: "recipes"
    })
  }
};
</script>

<template>
  <div class="main">
    <div class="left">
      <RecipeListEntry :recipes="recipes"/>
    </div>
    <div class="right">
      <NewRecipeForm/>
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
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}

.left,
.right {
  align-content: left;
  text-align: left;
  padding: 30px;
}

.left {
  overflow: scroll;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

h2 {
  padding: 20px;
  background: #f9f9f9;
  margin-bottom: 8px;
}

.right {
  height: 100%;
  grid-area: right;
  background-color: #e9e9e9;
}
</style>