<template>
  <section class="people-cards">
    <template v-if="thereAreItems">
      <people-card
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        @editar="(item) => $emit('editar', item)"
      />
    </template>
    <template v-else>
      <span class="text-center">{{ empty }}</span>
    </template>
  </section>
</template>

<script>
  import PeopleCard from "./PeopleCard.vue";

  export default {
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      empty: {
        type: String,
      },
    },
    components: {
      PeopleCard,
    },
    computed: {
      thereAreItems() {
        return this.items?.length > 0;
      },
    },
  };
</script>

<style lang="scss">
  .people-cards {
    display: grid;
    gap: 20px;
    margin: 30px 0;
  }
</style>
