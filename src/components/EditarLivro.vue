<template>
  <div class="editar-livro">
    <input v-model="titulo" placeholder="Editar livro" />
    <br />
    <input v-model="autor" placeholder="Nome do autor" />
    <button @click="editar()">Editar</button>
    <button @click="cancelar()">Cancelar</button>
  </div>
</template>

<script>
import mediator from "@/mediator";

export default {
  data() {
    return {
      titulo: null,
      autor: null,
      livroSelecionado: null
    };
  },
  methods: {
    editar() {
      this.livroSelecionado.titulo = this.titulo;
      this.livroSelecionado.autor = this.autor;
      this.$http.put("/", this.livroSelecionado).then(() => {
        mediator.editarLivro();
        this.titulo = null;
        this.autor = null;
      });
    },
    cancelar() {
      this.livroSelecionado = null;
      this.titulo = null;
      this.autor = null;
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

<style>
</style>