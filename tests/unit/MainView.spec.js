import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainView from "@/views/MainView";
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";
import initialState from "@/store/state";
import recipesFixture from "./fixtures/recipes";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MainView", () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(MainView, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      recipeListEntry: () => wrapper.find(RecipeListEntry),
      newRecipe: () => wrapper.find(NewRecipeForm)
    };
  };

  beforeEach(() => {
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { wrapper } = build();

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    // arrange
    const { recipeListEntry, newRecipe } = build();

    // assert
    expect(recipeListEntry().exists()).toBe(true);
    expect(newRecipe().exists()).toBe(true);
  });

  it("passes a binded recipe prop to the entry component", () => {
    // arrange
    const { wrapper, recipeListEntry } = build();
    wrapper.setData({
      recipes: [
        {
          title: "Veggie Delight"
        }
      ]
    });

    // assert
    expect(recipeListEntry().vm.recipes).toBe(wrapper.vm.recipes);
  });

  it("passes binded recipes prop to entry component", () => {
    // arrange
    state = recipesFixture;
    const { recipeListEntry } = build();

    // assert
    expect(recipeListEntry().vm.recipes).toBe(state.recipes);
  });
});
