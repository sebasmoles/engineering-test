import { defineStore } from "pinia";

export const useDefaultStore = defineStore("default", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setIsLoading(value = true) {
      this.isLoading = value;
    },
  },
});
