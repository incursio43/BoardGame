<template lang="html">
  <sui-row>
    <h1>Favoritos</h1>
    <sui-input placeholder="Buscar por categoria" type="text" v-model="filter" transparent icon="search"/>
    <!-- <sui-dropdown
      placeholder="Filtrar"
      selection
      :options="options"
      v-model="current"
      v-on:click="observador"
    /> -->
    <sui-button>
      Filtrar
    </sui-button>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Nombre</sui-table-header-cell>
        <sui-table-header-cell>Publicador</sui-table-header-cell>
        <sui-table-header-cell>Categoria</sui-table-header-cell>
        <sui-table-header-cell>Año</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="favorite in allFavorites" :key="favorite.ID">
        <Cell :Prop="favorite.Name" />
        <Cell :Prop="favorite.Publisher" />
        <Cell :Prop="favorite.Category" v-if="favorite.Category === '11'" style="background-color:green"/>
        <Cell :Prop="favorite.Category" v-if="favorite.Category === '12'" style="background-color:red"/>
        <Cell :Prop="favorite.Category" v-if="favorite.Category === '13'" style="background-color:#0CB7F2"/>
        <Cell :Prop="favorite.Category" v-if="favorite.Category === '14'" style="background-color:grey"/>
        <Cell :Prop="favorite.Category" v-if="favorite.Category === '15'" style="background-color:orange"/>
        <Cell :Prop="favorite.Year" />
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </sui-row>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Cell from '../components/Cell'

export default {
  name: 'Tabla',
  data () {
    return {
      filter: '',
      options: [
        {
          text: 'Todos',
          value: '10'
        },
        {
          text: 'Adventure',
          value: '11'
        },
        {
          text: 'Puzzle',
          value: '12'
        },
        {
          text: 'Strategy',
          value: '13'
        },
        {
          text: 'Fantasy',
          value: '14'
        },
        {
          text: 'Civilization',
          value: '15'
        }
      ]
    }
  },
  components: {
    Cell
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['allFavorites'])
  },
  methods: {
    ...mapActions(['getFavorites'])
  },
  created () {
    this.getFavorites()
  }
}
</script>

<style scoped>

</style>
