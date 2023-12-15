<template lang="pug">
    .card
        .card-image
             figure.image.is-1by1
               img(:src="cancion.album.images[0].url")
        .card-content
            .media 
                .media-left 
                    figure.image.is-48x48
                      img(:src="cancion.album.images[0].url")
                .nedia-content
                    p.title.is-6 
                       strong {{ cancion.name }}
                    p.subtitle.is-6 {{ cancion.artists[0].name }}
            .content
               small {{ ms_to_mm(cancion.duration_ms) }}
               nav.level 
                  .level-left
                    button.level-item.button.is-primary
                      span.icon.is-small(@click="selectCancion") ▶
                    button.level-item.button.is-warning
                      span.icon.is-small(@click="goToTrack(cancion.id)") 🚀    
</template>

<script>
import emitter from '@/services/emitter'
import { ms_to_mm } from '@/filters/filters'

export default {
  name: 'SmTrack',

  props: {
    cancion: { type: Object, default: () => {} },
  },

  methods: {
    selectCancion() {
      if (!this.cancion.preview_url) {
        return
      }
      this.$emit('click-cancion', this.cancion)
      emitter.emit('reproducir-cancion', this.cancion)
    },
    goToTrack(id) {
      if (!this.cancion.preview_url) {
        return
      }
      this.$router.push({ name: 'track', params: { id } })
    },
  },
  setup() {
    return {
      ms_to_mm,
    }
  },
}
</script>

<style lang="scss"></style>
