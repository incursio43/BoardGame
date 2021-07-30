<template>
  <sui-grid :columns="3" divided>
    <sui-grid-row >
      <sui-grid-column :width="4">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
      <sui-card-group :items-per-row="2">
        <Tarjeta :boardgame="boardgame" v-for="boardgame in boardGames" :key="boardgame.ID" />
      </sui-card-group>
      </sui-grid-column>
      <sui-grid-column :width="4">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tarjeta from '../components/Tarjeta.vue'

export default {
  name: 'Visualizar',
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['boardGames'])
  },
  methods: {
    ...mapActions(['getBoardGames']),
    ...mapActions(['getFavorites'])
  },
  created () {
    this.getBoardGames()
    this.getFavorites()
  }
}
</script>

<style scoped>

</style>
