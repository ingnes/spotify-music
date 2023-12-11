<template>
  <header class="shadow w-320 h-409">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img :src="src" :alt="alt" />
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PxHeader',

  data() {
    return {
      src: 'https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg',
      alt: 'Mockup Platzi',
    }
  },
}
</script>

<style lang="scss"></style>
