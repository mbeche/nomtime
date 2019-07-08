import axios from "axios";
import keys from "@/api-keys.json";

export default {
  async getRecipes({ state, commit }, query, diet, health) {
    try {
      let response = await axios.get(`${state.apiUrl}`, {
        params: {
          q: query,
          diet: diet,
          health: health,
          app_id: keys["edamam"]["app_id"],
          app_key: keys["edamam"]["app_key"],
          from: 0,
          to: 9
        }
      });
      console.log(response);
      commit("setRecipes", response.data.hits);
    } catch (error) {
      commit("setRecipes", []);
    }
  }
};
