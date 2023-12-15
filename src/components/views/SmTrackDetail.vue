<template lang="pug">
    .container(v-if="cancion && cancion.album")
       .columns 
          .column.is-5.is-offset-4
            sm-track(:cancion = "cancion")
</template>

<script>
import SmTrack from '@/components/SmTrack.vue'
import api from '@/services/api'

export default {
  name: 'SmTrackDetail',

  data() {
    return {
      cancion: {},
    }
  },

  components: { SmTrack },

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
