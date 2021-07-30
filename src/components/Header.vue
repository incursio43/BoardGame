<template lang="html">
  <sui-segment inverted fluid>
    <h2 is="sui-header">
      BoardGames
    </h2>
    <router-link to="/">Inicio </router-link>
    <router-link to="/visualizar">Board Games </router-link>
    <router-link to="/detalle">Detalle </router-link>
  </sui-segment>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
