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
import mediator from "@/mediator";

export default {
  data() {
    return {
      titulo: "",
      autor: "",
      livroSelecionado: {}
    };
  },
  methods: {
    editar() {
      this.livroSelecionado.titulo = this.titulo;
      this.livroSelecionado.autor = this.autor;
      this.$http.put("/", this.livroSelecionado).then(() => {
        mediator.editarLivro();
        this.titulo = "";
        this.autor = "";
      });
    },
    cancelar() {
      this.livroSelecionado = {};
      this.titulo = "";
      this.autor = "";
      mediator.cancelarEdicaoLivro();
    }
  },
  created() {
    mediator.selecionarLivroPublisher.addSubscriber(livro => {
      this.livroSelecionado = livro;
      this.titulo = livro.titulo;
      this.autor = livro.autor;
    });
  }
};
</script>

<style scoped>
.editar-livro {
  display: block;
}
</style>