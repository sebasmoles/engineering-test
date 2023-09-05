<template>
  <search-input
    v-model="json.query"
    placeholder="Search people by name"
    @keypress.enter="searchPeopleByNameHandler"
  />
  <people-cards :items="peopleStore.data" :empty="empty" />
</template>

<script>
  import SearchInput from "@/components/common/SearchInput.vue";
  import PeopleCards from "@/components/people/PeopleCards.vue";
  import { usePeopleStore } from "@/stores/people.store";
  import { useDefaultStore } from "@/stores/default.store";
  import { searchPeopleByName } from "@/services/search.service";

  export default {
    components: {
      SearchInput,
      PeopleCards,
    },
    setup() {
      return {
        peopleStore: usePeopleStore(),
        defaultStore: useDefaultStore(),
      };
    },
    data() {
      return {
        json: {
          query: null,
          offset: 0,
          limit: 10,
        },
        lastQuery: null,
        empty: null,
      };
    },
    computed: {
      queryHasValue() {
        return this.json?.query;
      },
      queryIsRepeated() {
        return this.json?.query == this.lastQuery;
      },
    },
    methods: {
      async searchPeopleByNameHandler() {
        if (this.queryIsRepeated) return;
        else this.lastQuery = this.json.query;

        if (!this.queryHasValue) {
          this.peopleStore.setData([]);
          this.empty = null;
          return;
        }
        this.defaultStore.setIsLoading();
        const { data, status } = await searchPeopleByName(this.json);
        this.defaultStore.setIsLoading(false);
        if (status == 200) {
          const results = data?.results;
          this.peopleStore.setData(results || []);
          if (results?.length <= 0) this.empty = "No matches found";
        } else {
          alert("Something went wrong. Please, try again later.");
        }
      },
    },
  };
</script>
