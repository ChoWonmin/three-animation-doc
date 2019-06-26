<template lang="pug">
  v-app
    v-toolbar
      v-toolbar-title.headline.text-uppercase
        span Vuetify
        span.font-weight-light MATERIAL DESIGN
      v-spacer
      v-btn(flat
             href="https://github.com/vuetifyjs/vuetify/releases/latest"
             target="_blank")
        .mr-2 Latest Release
    .appliacation-grid
      v-navigation-drawer.blue.lighten-3 navigation
      v-content.orange(orange) content
        router-view.pa-0.ma-0
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
.appliacation-grid {
  height: 100%;
  display: flex;
}
</style>
