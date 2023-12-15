<template lang="pug">
     .content(v-if="cancion.album")
        p
           img(:src="cancion.album.images[0].url")
        p
         strong {{ cancion.name }}
         small {{ ms_to_mm(cancion.duration_ms) }}
        p(v-show="cancion.preview_url")
         audio(controls, :src="cancion.preview_url")
        
    
</template>

<script>
import emitter from '@/services/emitter'
import { ms_to_mm } from '@/filters'

export default {
  name: 'SmPlayer',

  data() {
    return {
      cancion: {},
    }
  },

  created() {
    emitter.on('reproducir-cancion', (cancion) => {
      this.cancion = cancion
      // this.image = cancion.album.images[0].url
      // console.log(this.image)
    })
  },
  setup() {
    return {
      ms_to_mm,
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
