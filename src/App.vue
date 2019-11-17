<template>
  <div id="app" class="container">
    <h2>Lista de livros</h2>
    <br />
    <router-view />
    <br />
    <buscar-livro />
    <br />
    <listar-livro />
  </div>
</template>

<script>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
