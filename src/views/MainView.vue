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
  <div>MainView
    <RecipeListEntry :recipes="recipes"/>
    <NewRecipeForm/>
  </div>
</template>
