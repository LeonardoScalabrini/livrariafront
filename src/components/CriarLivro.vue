<template>
  <div class="usuario-detalhe">
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
      mediator.adicionarLivro({ titulo: this.titulo, autor: this.autor });
    }
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