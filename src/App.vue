<template>
  <div id="app">
    <h2>Lista de livros</h2>
    <criar-livro v-show="!ehEditar" />
    <editar-livro v-show="ehEditar" />
    <br />
    <buscar-livro />
    <listar-livro />
  </div>
</template>

<script>
import CriarLivro from "@/components/CriarLivro.vue";
import EditarLivro from "@/components/EditarLivro.vue";
import BuscarLivro from "@/components/BuscarLivro.vue";
import ListarLivro from "@/components/ListarLivro.vue";
import mediator from "@/mediator";

export default {
  name: "app",
  data() {
    return {
      ehEditar: false
    };
  },
  components: {
    CriarLivro,
    EditarLivro,
    BuscarLivro,
    ListarLivro
  },
  created() {
    mediator.selecionarLivroPublisher.addSubscriber(() => {
      this.ehEditar = true;
    });
    mediator.editarLivroPublisher.addSubscriber(() => {
      this.ehEditar = false;
    });
    mediator.cancelarEdicaoLivroPublisher.addSubscriber(() => {
      this.ehEditar = false;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
