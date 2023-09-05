import { defineStore } from "pinia";

export const usePeopleStore = defineStore("people", {
  state: () => ({
    data: [],
  }),
  actions: {
    setData(value = []) {
      this.data = value;
    },
  },
});
