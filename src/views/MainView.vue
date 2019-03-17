<script>
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";

export default {
  name: "MainView",
  components: {
    RecipeListEntry,
    NewRecipeForm
  }
};
</script>

<template>
  <div>MainView
    <RecipeListEntry/>
    <NewRecipeForm/>
  </div>
</template>
