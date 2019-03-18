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
  <div>
    <h2>Recipe List</h2>
    <ul>
      <li v-for="(recipe, index) in recipes" v-bind:key="index">
        <div>Recipe: {{ recipe.title }}</div>
        <div>Ready In: {{ recipe.readyInMinutes }} minutes</div>
      </li>
    </ul>
  </div>
</template>
