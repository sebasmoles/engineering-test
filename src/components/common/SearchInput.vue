<template>
  <div class="w-full relative">
    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      type="text"
      class="w-full input-icon"
      @input="(e) => $emit('update:modelValue', e.target?.value || null)"
    />
    <img src="@/assets/icons/magnifying.svg" alt="Magnifier" />
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
      },
      placeholder: {
        type: String,
        default: "Search",
      },
    },
    inheritAttrs: false,
  };
</script>

<style lang="scss" scoped>
  img {
    position: absolute;
    width: 18px;
    height: 18px;
    filter: invert(1);
    left: 16px;
    bottom: 14px;
  }
</style>
