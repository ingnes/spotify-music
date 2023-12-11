<template lang="pug">  
  
    section.section
        nav.navbar
            .field.has-addons
            .control.is-expanded
                input.input(
                type="text"
                placeholder="Buscar canciones"
                v-model="searchQuery")
            .control
                button.button.is-info(@click="searchTrack") Buscar
            .control
                button.button.is-danger(@click="cancelar") &times;
            .control
                button.button
                span.is-size-7 {{ cantidad }}

        .container.custom
            .table.container
              table.table.is-striped.is-bordered(v-show="encontrados")
                thead
                  tr
                    th.has-text-centered Cancion
                    th.has-text-centered Artista
                tbody
                  tr(v-for="c in canciones",:key="c.id")             
                    td.has-text-centered {{ c.name }}
                    td.has-text-centered
                      ul(v-if="c.artists")
                        li(v-for="a in c.artists", :key="a.id") {{ a.name }}
                      p(v-else) {{ '-' }}              
            
  
</template>

<script>
import api from './api'

export default {
  name: 'app',
  data() {
    return {
      canciones: [],
      searchQuery: '',
      showTable: false,
    }
  },
  methods: {
    cancelar() {
      this.searchQuery = ''
      this.canciones = []
      this.encontrados = false
    },
    searchTrack() {
      //console.log(this.searchQuery)
      const clientId = 'af6ed709c1864aa7b440ae660f9cae09'
      const clientSecret = '3ae071dfc9be4c1db82795dae3e4f26d'

      api
        .getToken(clientId, clientSecret)
        .then((token) => api.searchItem(token, this.searchQuery))
        .then(
          (trackItems) => (
            (this.canciones = trackItems), (this.encontrados = true)
          )
        )
        .catch(() => ((this.canciones = []), (this.encontrados = false)))
    },
  },
  computed: {
    cantidad() {
      return `Encontrados: ${this.canciones.length} `
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
#app {
  .custom {
    margin-top: 30px;
  }

  .results {
    margin-top: 50px;
  }
}
</style>
