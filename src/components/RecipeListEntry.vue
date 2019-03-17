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
    RecipeListEntry
    {{ recipe }}
  </div>
</template>
