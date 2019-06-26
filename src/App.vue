<template lang="pug">
  v-app
    v-toolbar
      v-toolbar-title.headline.text-uppercase
        span Vuetify
        span.font-weight-light MATERIAL DESIGN
      v-spacer
      v-btn(flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank")
        .mr-2 Latest Release
    .appliacation-grid
      v-navigation-drawer.blue.lighten-3
        v-list
          v-list-group(prepend-icon="account_circle" value="true" v-for="item in items")
            template(v-slot:activator)
              v-list-tile
                v-list-tile-title {{item.title}}
            v-list-tile(v-for="subItem in item.list" :key="subItem.title" @click="")
              v-list-tile-content
                v-list-tile-title {{ subItem.title }}
              v-list-tile-action
                v-icon {{ subItem.action }}
      v-content
        router-view.pa-0.ma-0
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      items: [
        {
          title: 'Spring System', icon: 'gavel',
          list: [
            {
              title: 'Basic', icon: 'gavel'
            },
            {
              title: 'Collision', icon: 'gavel'
            },
            {
              title: 'Contact', icon: 'gavel'
            },
            {
              title: 'Cloth System', icon: 'gavel'
            }
          ]
        },
      ]
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
