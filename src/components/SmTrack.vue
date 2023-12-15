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
               small {{ cancion.duration_ms }}
               nav.level 
                  .level-left
                    a.level-item
                      span.icon.is-small(@click="selectCancion") ▶
                    a.level-item
                      span.icon.is-small(@click="goToTrack(cancion.id)") 🚀    
</template>

<script>
import emitter from '@/services/emitter'

export default {
  name: 'SmTrack',

  props: {
    cancion: { type: Object, default: () => {} },
  },

  methods: {
    selectCancion() {
      this.$emit('click-cancion', this.cancion)
      emitter.emit('reproducir-cancion', this.cancion)
    },
    goToTrack(id) {
      this.$router.push({ name: 'track', params: { id } })
    },
  },
}
</script>

<style lang="scss"></style>
