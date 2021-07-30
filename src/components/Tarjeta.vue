<template lang="html">
  <sui-card>
      <sui-card-content>
        <sui-card-header>
          {{boardgame.Name}}
        </sui-card-header>
      </sui-card-content>
      <sui-card-content>
        <sui-header size="tiny">BoardGame</sui-header>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <p>Publicador: {{boardgame.Publisher}}</p>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <p>Categoria: {{boardgame.Category}}</p>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <p>Descripcion: {{boardgame.Description}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- end of base semantic ui, to be updated in the future with sui-feed -->
      </sui-card-content>
      <sui-card-content extra>
        <div is="sui-button-group">
          <sui-button icon="heart outline" />
          <sui-button icon="heart" />
          <sui-button icon="edit" />
          <sui-button icon="eye" />
          <sui-button icon="ban" />
        </div>
      </sui-card-content>
    </sui-card>
</template>

<script>

export default {
  name: 'Tarjeta',
  props: [
    'boardgame'
  ]
}
</script>

<style scoped>

</style>
