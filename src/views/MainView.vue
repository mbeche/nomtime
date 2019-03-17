<script>
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";

export default {
  name: "MainView",
  components: {
    RecipeListEntry,
    NewRecipeForm
  },
  data() {
    return {
      recipe: { name: "" }
    };
  }
};
</script>

<template>
  <div>MainView
    <RecipeListEntry :recipe="recipe"/>
    <NewRecipeForm/>
  </div>
</template>
