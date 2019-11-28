<template>
  <div class="criar-livro">
    <b-form-input v-model="titulo" type="text" placeholder="Adicione um livro" />
    <br />
    <b-form-input v-model="autor" type="text" placeholder="Nome do autor" />
    <br />
    <b-button block variant="primary" @click="adicionar()">Adicionar</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: null,
      autor: null
    };
  },
  methods: {
    adicionar() {
      this.$store.dispatch("criarLivro", {
        titulo: this.titulo,
        autor: this.autor
      });
    }
  }
};
</script>

<style>
.criar-livro {
  display: block;
}
</style>