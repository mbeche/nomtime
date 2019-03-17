import { shallowMount } from "@vue/test-utils";
import MainView from "@/views/MainView";

describe("MainView", () => {
  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(MainView);

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});
