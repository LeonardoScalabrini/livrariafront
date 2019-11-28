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

export default {
  name: "app",
  components: {
    BuscarLivro,
    ListarLivro
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
