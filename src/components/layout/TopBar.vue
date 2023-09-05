<template>
  <header id="default-top-bar">
    <img
      src="../../assets/logo.svg"
      alt="Logo"
      @click="this.$router.push('/')"
    />
    <nav>
      <router-link to="/favorites">Favorite people</router-link>
    </nav>
  </header>
</template>
