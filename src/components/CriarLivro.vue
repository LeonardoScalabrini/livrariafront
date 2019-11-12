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
import mediator from "@/mediator";

export default {
  data() {
    return {
      titulo: "",
      autor: ""
    };
  },
  methods: {
    adicionar() {
      this.$http
        .post("/", { titulo: this.titulo, autor: this.autor })
        .then(res => {
          mediator.adicionarLivro(res.data);
          this.titulo = "";
          this.autor = "";
        });
    }
  },
  created() {
    mediator.selecionarLivroPublisher.addSubscriber(() => {
      this.titulo = "";
      this.autor = "";
    });
  }
};
</script>

<style>
.criar-livro {
  display: block;
}
</style>