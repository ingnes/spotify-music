import emitter from '@/services/emitter'

export default {
  methods: {
    selectCancion() {
      if (!this.cancion.preview_url) {
        return
      }
      this.$emit('click-cancion', this.cancion)
      emitter.emit('reproducir-cancion', this.cancion)
    },
  },
}
