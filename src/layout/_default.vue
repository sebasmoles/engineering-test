<template>
  <div id="default-layout">
    <top-bar />
    <main id="default-layout-content">
      <router-view />
    </main>
  </div>
</template>

<script>
  import TopBar from "@/components/layout/TopBar.vue";

  export default {
    components: {
      TopBar,
    },
  };
</script>
