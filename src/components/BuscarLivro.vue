<template>
  <div class="usuario-detalhe">
    <div>
      <div>
        <input v-model="filtro" placeholder="Buscar livro" />
      </div>
      <div>
        <button @click="buscar()">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtro: null
    };
  },
  methods: {
    buscar() {}
  },
  created() {}
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>