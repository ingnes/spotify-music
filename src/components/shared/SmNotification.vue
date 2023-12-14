<template lang="pug">
    .container
       .columns 
           .column.is-5.is-offset-4
              .notification.is-danger
                  slot  Algo anduvo mal
    
</template>

<style lang="scss" scoped>
.notification {
  margin-top: 10px;
}
</style>
