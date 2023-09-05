<template>
  <div class="loader">
    <img src="@/assets/spinner.gif" alt="Spinner" />
  </div>
</template>

<style scoped>
  .loader {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: white;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 101;
  }
</style>
