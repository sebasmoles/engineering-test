<template>
  <loader-component v-if="defaultStore.isLoading" />
  <router-view />
</template>

<script>
  import LoaderComponent from "@/components/common/LoaderComponent.vue";
  import { useDefaultStore } from "@/stores/default.store";

  export default {
    components: { LoaderComponent },
    setup: () => ({
      defaultStore: useDefaultStore(),
    }),
  };
</script>
