import { shallowMount } from "@vue/test-utils";
import MainView from "@/views/MainView";
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";

describe("MainView", () => {
  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(MainView);

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    // arrange
    const wrapper = shallowMount(MainView);
    const recipeListEntry = wrapper.find(RecipeListEntry);
    const newRecipe = wrapper.find(NewRecipeForm);

    // assert
    expect(recipeListEntry.exists()).toBe(true);
    expect(newRecipe.exists()).toBe(true);
  });
});
