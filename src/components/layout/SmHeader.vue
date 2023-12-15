<template lang="pug">
     section.hero.is-success
        .hero-head
           header.nav
             .container
                .nav-left
                  .nav-item
                     strong 🎶 Spotify Music
                  .nav-right.nav-menu
                     router-link.nav-item(:to="{name: 'search'}") Buscar
                     router-link.nav-item(:to="{name: 'about'}") Nosotros

        .hero-body
          .container.has-text-centered
            h1.title Spotify Music 
            h2.subtitle Buscador de Canciones
            sm-player    
             
</template>

<script>
import SmPlayer from '@/components/SmPlayer.vue'

export default {
  components: { SmPlayer },
}
</script>
