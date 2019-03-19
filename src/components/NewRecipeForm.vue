<script>
import mapMutations from "vuex";
export default {
  name: "NewRecipeForm",
  data() {
    return {
      newRecipeTitle: ""
    };
  },
  methods: {
    ...mapMutations(["ADD_RECIPE"]),
    addRecipe: function() {
      // const recipe = this.newRecipeTitle;
      // this.ADD_RECIPE(recipe);
      this.ADD_RECIPE(this.newRecipeTitle);
      this.newRecipeTitle = "";
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addRecipe">
      <input
        class="recipe-title"
        type="text"
        placeholder="Recipe Name"
        v-model="newRecipeTitle"
      />
    </form>
  </div>
</template>
