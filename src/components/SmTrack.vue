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
                    a.level-icon
                      span.icon.is-small ▶    
</template>

<script>
export default {
  name: 'SmTrack',

  props: {
    cancion: { type: Object, default: () => {} },
  },
}
</script>

<style lang="scss"></style>
