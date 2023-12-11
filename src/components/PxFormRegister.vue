<template>
  <section id="section">
    <h2>Registro estación Platzi</h2>
    <span>Nombre</span>
    <input type="text" placeholder="Platzerito" />
    <span>Apellido</span>
    <input type="text" placeholder="Cool de la Web" />
    <span>Cargo</span>
    <input type="text" placeholder="FullStack JS" />
    <div class="button-container">
      <button>ENVIAR</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PxFormRegister',
}
</script>

<style lang="scss">
section {
  display: inline-flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
}

section h2 {
  font-size: 24px;
  font-weight: bold;
  color: #00bfd6;
}

section span {
  width: inherit;
  text-align: left;
  color: #ff9300;
  justify-self: left;
  font-weight: bold;
  font-size: 8px;
  margin-top: 12px;
}

section input {
  justify-self: center;
  width: inherit;
  border-width: 0px 0px 1px 0px;
  border-color: #ff9300;
}

section input::placeholder {
  color: black;
}

.button-container {
  display: inline-flex;
  justify-content: flex-end;
}

section button {
  background-color: #00bfd6;
  border: none;
  margin-top: 16px;
  width: 120px;
  height: 34px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
}
</style>
