<script>
import { mapMutations } from "vuex";
import { db } from "../main";
import Multiselect from "vue-multiselect";

import recipesFixture from "@/../tests/unit/fixtures/recipes";

export default {
  name: "NewRecipeForm",
  components: {
    Multiselect
  },
  data() {
    return {
      query: "",
      diet: {},
      health: {},
      recipeTitle: "",
      recipeTime: "",
      healthValue: [],
      healthOptions: [
        "alcohol-free",
        "celery-free",
        "crustacean-free",
        "dairy-free",
        "egg-free",
        "fish-free",
        "gluten-free",
        "kidney-friendly",
        "kosher",
        "low-potasium",
        "lupine-free",
        "mustard-free",
        "no-oil-added",
        "low-sugar",
        "paleo",
        "peanut-free",
        "pescatarian",
        "pork-free",
        "red-meat-free",
        "sesame-free",
        "shellfish-free",
        "soy-free",
        "sugar-conscious",
        "tree-nut-free",
        "vegan",
        "vegetarian",
        "wheat-free"
      ],
      dietValue: [],
      dietOptions: [
        "Balanced",
        "High-Fiber",
        "High-Protein",
        "Low-Carb",
        "Low-Fat",
        "Low-Sodium"
      ],
      dietOptionConverter: [
        { label: "Balanced", parameter: "balanced" },
        { label: "High-Fiber", parameter: "high-fiber" },
        { label: "High-Protein", parameter: "high-protein" },
        { label: "Low-Carb", parameter: "low-carb" },
        { label: "Low-Fat", parameter: "low-fat" },
        { label: "Low-Sodium", parameter: "low-sodium" }
      ],
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  },
  methods: {
    ...mapMutations(["ADD_RECIPE"]),
    showRecipes(query) {
      this.$store.dispatch("getRecipes", query);
    },
    loadRecipe: function() {
      // const recipe = {};
      // console.log(this.query);
      // console.log(this.dietValue);
      // console.log(this.healthValue);
      // this.showRecipes(this.query, this.diet, this.health);
      const recipes = recipesFixture.recipes;
      console.log("recipes: ", recipes);
      recipes.forEach(recip => {
        console.log("recipe: ", recip);
        db.collection("recipes").add(recip);
      });
      // this.recipe = {};
    }
  }
};
</script>
<template>
  <div>
    <form @submit.prevent="loadRecipe">
      Search:
      <input
        class="search-terms custom"
        type="text"
        placeholder="Key ingredients"
        v-model="query"
      />
      <div class="diet">
        <label class="typo__label">Diet:</label>
        <multiselect
          v-model="dietValue"
          :options="dietOptions"
          :searchable="false"
          :multiple="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Pick a value"
        ></multiselect>
      </div>
      <div class="diet health">
        <label class="typo__label">Health:</label>
        <multiselect
          v-model="healthValue"
          :options="healthOptions"
          :searchable="false"
          :multiple="false"
          :close-on-select="true"
          :show-labels="false"
          placeholder="Pick a value"
        ></multiselect>
      </div>
      <button type="submit" class="add-recipe-button">Submit</button>
    </form>
    <button @click="showRecipes(query)">Load Recipes</button>
    <div style="clear: both;"></div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.diet {
  width: 45%;
  box-sizing: content-box;
  display: inline-box;
  float: left;
  padding: 2% 4% 2% 0;
}

.health {
  padding: 2% 0 2% 4%;
}

.multiselect__tags {
  border: none;
  box-shadow: 0 5px 5px lightgrey;
  outline: none;
  border-radius: 0px;
}
</style>