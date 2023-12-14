<template lang="pug">

    sm-header  

    router-view

    sm-footer        
  
</template>

<script>
import SmFooter from '@/components/layout/SmFooter.vue'
import SmHeader from '@/components/layout/SmHeader.vue'

export default {
  name: 'app',

  components: { SmFooter, SmHeader },
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
