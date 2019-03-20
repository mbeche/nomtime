<script>
export default {
  name: "RecipeListEntry",
  props: {
    recipe: {
      type: Object,
      required: true,
      defualt: () => ({})
    }
  }
};
</script>

<template>
  <div>
    <div class="recipe-entry-title">{{ recipe.title }}</div>
    <div>Ready In: {{ recipe.readyInMinutes }} minutes</div>
  </div>
</template>

<style>
.recipe-entry-title {
  font-weight: bold;
}
</style>