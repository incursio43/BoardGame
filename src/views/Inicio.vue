<template lang='html'>
  <sui-grid :columns="3" divided name="Inicio">
    <sui-grid-row >
      <sui-grid-column :width="4">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
        <Tabla name="Tabla"/>
      </sui-grid-column>
      <sui-grid-column :width="4">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import Tabla from '../components/Tabla.vue'

export default {
  name: 'Inicio',
  components: {
    Tabla
  }
}
</script>

<style scoped>

</style>
