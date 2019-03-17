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
      recipes: [{ name: "" }]
    };
  }
};
</script>

<template>
  <div>MainView
    <RecipeListEntry :recipes="recipes"/>
    <NewRecipeForm/>
  </div>
</template>
