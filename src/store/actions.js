import axios from "axios";
import keys from "@/api-keys.json";

export default {
  async getRecipes({ state, commit }, plan) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          q: plan,
          app_id: keys["edamam"]["app_id"],
          app_key: keys["edamam"]["app_key"],
          from: 0,
          to: 9
        }
      });
      commit("setRecipes", response.data.hits);
    } catch (error) {
      commit("setRecipes", []);
    }
  }
};
