<template>
  <div class="criar-livro">
    <input v-model="titulo" placeholder="Adicione um livro" />
    <br />
    <input v-model="autor" placeholder="Nome do autor" />
    <button @click="adicionar()">Adicionar</button>
  </div>
</template>

<script>
import mediator from "@/mediator";

export default {
  data() {
    return {
      titulo: null,
      autor: null
    };
  },
  methods: {
    adicionar() {
      this.$http
        .post("/", { titulo: this.titulo, autor: this.autor })
        .then(res => {
          mediator.adicionarLivro(res.data);
          this.titulo = null;
          this.autor = null;
        });
    }
  },
  created() {
    mediator.selecionarLivroPublisher.addSubscriber(() => {
      this.titulo = null;
      this.autor = null;
    });
  }
};
</script>

<style>
</style>