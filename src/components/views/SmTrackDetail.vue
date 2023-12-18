<template lang="pug">
    .container(v-if="cancion && cancion.album")
       .columns 
          .column.is-3.has-text-centered
            figure.media-left
                p.image
                  img(:src="cancion.album.images[0].url")
                p
                  button.button.is-primary.is-large(@click="selectCancion")

          .column.is-8
            .panel
                .panel-heading
                   h1.title {{ cancion.name }}
                .panel-block 
                   article.media
                      .media-content
                          .content
                             ul(v-for="(v,k) in cancion")
                               li
                                strong {{ k }} :&nbsp;
                                span {{ v }}
                      nav.level
                          .level-left
                            a.level-item



             

</template>

<script>
import api from '@/services/api'
import trackMixin from '@/mixins/track'

export default {
  name: 'SmTrackDetail',

  mixins: [trackMixin],

  data() {
    return {
      cancion: {},
    }
  },

  created() {
    const id = this.$route.params.id
    // console.log(`id track: ${id}`)
    api
      .getToken()
      .then((token) => api.getTrack(token, id))
      .then((track) => {
        this.cancion = track
        //console.log(`track : ${track}.id`)
      })
      .catch(() => {
        this.$router.push({ name: 'error' })
      })
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
