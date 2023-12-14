<template lang="pug">    
    sm-notification(v-show="showNotification")
      p.has-text-centered(slot="body") No se encontraron resultados
    .container
       .columns
         .column.is-5.is-offset-6
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

        .container.results
          .columns.is-multiline
            .column.is-one-quarter(v-for="c in canciones")
                sm-track(
                      :cancion="c",
                      @click-cancion="setCancionSeleccionada",
                      :class="cancionSeleccionada && cancionSeleccionada.id ? {'is-active' : c.id == cancionSeleccionada.id } :''"
                      )            
  
</template>

<script>
import api from '../api'
import SmTrack from '@/components/SmTrack.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import SmNotification from '@/components/shared/SmNotification.vue'

export default {
  name: 'SmSearch',
  data() {
    return {
      canciones: [],
      cancionSeleccionada: {},
      searchQuery: '',
      showTable: false,
      isLoading: false,
      showNotification: false,
    }
  },
  components: { SmTrack, PulseLoader, SmNotification },
  methods: {
    setCancionSeleccionada(cancion) {
      this.cancionSeleccionada = cancion
    },
    cancelar() {
      this.searchQuery = ''
      this.canciones = []
      this.encontrados = false
    },
    searchTrack() {
      //console.log(this.searchQuery)
      if (!this.searchQuery) {
        this.showNotification = true
        return
      }

      this.isLoading = true
      const clientId = 'af6ed709c1864aa7b440ae660f9cae09'
      const clientSecret = '3ae071dfc9be4c1db82795dae3e4f26d'

      api
        .getToken(clientId, clientSecret)
        .then((token) => api.searchItem(token, this.searchQuery))
        .then((trackItems) => {
          //console.log(trackItems)
          this.showNotification = trackItems.length === 0
          this.canciones = trackItems
          this.encontrados = true
        })
        .finally(() => (this.isLoading = false))
        .catch(() => ((this.canciones = []), (this.encontrados = false)))
    },
  },
  computed: {
    cantidad() {
      return `Encontrados: ${this.canciones.length} `
    },
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    },
  },
}
</script>

<style lang="scss">
.custom {
  margin-top: 30px;
}

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px hsl(153, 53%, 53%) solid;
}
</style>
