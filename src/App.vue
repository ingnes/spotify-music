<template lang="pug">

    sm-header
    pulse-loader(:loading="isLoading")  
    section.section      
        nav.nav.has-shadow
            .container            
                input.input(
                type="text"
                placeholder="Buscar canciones"
                v-model="searchQuery")
                a.button.is-info.is-large(@click="searchTrack") Buscar            
                a.button.is-danger.is-large(@click="cancelar") &times;

        .container  
          p
           small {{ cantidad }}

        //- .container.custom
        //-     .table.container
        //-       table.table.is-striped.is-bordered(v-show="encontrados")
        //-         thead
        //-           tr
        //-             th.has-text-centered Cancion
        //-             th.has-text-centered Artista
        //-         tbody
        //-           tr(v-for="c in canciones",:key="c.id")             
        //-             td.has-text-centered {{ c.name }}
        //-             td.has-text-centered
        //-               ul(v-if="c.artists")
        //-                 li(v-for="a in c.artists", :key="a.id") {{ a.name }}
        //-               p(v-else) {{ '-' }} 

        .container.results
          .columns.is-multiline
            .column.is-one-quarter(v-for="c in canciones")
                sm-track(:cancion="c")      
                     
    sm-footer        
  
</template>

<script>
import api from './api'
import SmFooter from '@/components/layout/SmFooter.vue'
import SmHeader from '@/components/layout/SmHeader.vue'
import SmTrack from '@/components/SmTrack.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'app',
  data() {
    return {
      canciones: [],
      searchQuery: '',
      showTable: false,
      isLoading: false,
    }
  },
  components: { SmFooter, SmHeader, SmTrack, PulseLoader },
  methods: {
    cancelar() {
      this.searchQuery = ''
      this.canciones = []
      this.encontrados = false
    },
    searchTrack() {
      //console.log(this.searchQuery)
      if (!this.searchQuery) {
        return
      }

      this.isLoading = true
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
        .finally(() => (this.isLoading = false))
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
