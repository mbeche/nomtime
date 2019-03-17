<script>
export default {
  name: "RecipeListEntry",
  props: {
    recipes: {
      type: Array,
      required: true,
      defualt: () => ({})
    }
  }
};
</script>

<template>
  <ul>RecipeListEntry
    <li v-for="(recipe, index) in recipes" v-bind:key="index">{{ recipe }}</li>
  </ul>
</template>
