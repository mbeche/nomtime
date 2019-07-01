<script>
import { db } from "../main";
import Confirm from "@/components/Confirm";
export default {
  name: "RecipeListEntry",
  components: {
    Confirm
  },
  props: {
    recipe: {
      type: Object,
      required: true,
      defualt: () => ({})
    }
  },
  methods: {
    deleteRecipe(id) {
      this.$refs.confirm
        .open("Delete this recipe?", "", { color: "red" })
        .then(confirm => {
          console.log(confirm);
          if (confirm) {
            db.collection("recipes")
              .doc(id)
              .delete();
          }
        });
    }
  }
};
</script>

<template>
  <div>
    <div class="recipe-entry-box">
      <button @click="deleteRecipe(recipe.id)" class="remove">Delete</button>
      <a :href="recipe.recipe.url">
        <div>
          <div class="recipe-entry-title">{{ recipe.recipe.label }}</div>
          <div>Ready In: {{ recipe.recipe.totalTime }} minutes</div>
        </div>
      </a>
    </div>
    <confirm ref="confirm"></confirm>
  </div>
</template>

<style scoped>
.remove {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
  margin: 8px;
}

.recipe-entry-title {
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

.recipe-entry-box {
  padding: 10px;
  background: white;
  transition: background-color 0.5s ease;
  border-bottom: 0.25px solid #f8f8f8;
}

.recipe-entry-box:hover {
  background: #d8e0d7;
}
</style>