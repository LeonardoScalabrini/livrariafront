<template>
  <div class="editar-livro">
    <b-form-input v-model="titulo" type="text" placeholder="Editar livro" />
    <br />
    <b-form-input v-model="autor" type="text" placeholder="Nome do autor" />
    <br />
    <b-button block variant="primary" @click="editar()">Editar</b-button>
    <b-button block @click="cancelar()">Cancelar</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: this.$store.getters.getLivroSelecionado.titulo,
      autor: this.$store.getters.getLivroSelecionado.autor
    };
  },
  methods: {
    editar() {
      this.$store.dispatch("editarLivro", {
        id: this.$store.getters.getLivroSelecionado.id,
        titulo: this.titulo,
        autor: this.autor
      });
      this.cancelar();
    },
    cancelar() {
      this.$router.push({
        name: "adicionar"
      });
    }
  }
};
</script>

<style scoped>
.editar-livro {
  display: block;
}
</style>