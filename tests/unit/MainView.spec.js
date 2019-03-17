import { shallowMount } from "@vue/test-utils";
import MainView from "@/views/MainView";
import RecipeListEntry from "@/components/RecipeListEntry";
import NewRecipeForm from "@/components/NewRecipeForm";

describe("MainView", () => {
  const build = () => {
    const wrapper = shallowMount(MainView, {
      data: () => ({
        recipes: [{}]
      })
    });

    return {
      wrapper,
      recipeListEntry: () => wrapper.find(RecipeListEntry),
      newRecipe: () => wrapper.find(NewRecipeForm)
    };
  };
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
          name: "Veggie Delight"
        }
      ]
    });

    // assert
    console.log(recipeListEntry().vm.recipes);
    console.log(wrapper.vm.recipes);
    expect(recipeListEntry().vm.recipes).toBe(wrapper.vm.recipes);
  });
});
