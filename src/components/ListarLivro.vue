<template>
  <div class="listar-livro">
    <b-list-group>
      <b-list-group-item v-for="(livro, index) in livros" :key="livro.id">
        <div class="item-titulo-autor col">
          <big>{{ livro.titulo }}</big>
          <small>{{ livro.autor }}</small>
        </div>
        <div class="item-botoes col-1">
          <div>
            <b-button class="item-botao" variant="success" @click="selecionar(index)">Editar</b-button>
          </div>
          <div>
            <b-button class="item-botao" variant="danger" @click="remover(index, livro)">Remover</b-button>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  computed: {
    livros() {
      return this.$store.getters.getLivros;
    }
  },
  methods: {
    selecionar(index) {
      this.$store.dispatch("selecionarLivro", index);
      this.$router.push({
        name: "editar"
      });
    },
    remover(index, livro) {
      this.$store.dispatch("removerLivro", { index, livro });
    }
  }
};
</script>

<style scoped>
.listar-livro .list-group-item {
  display: flex;
}

.listar-livro .list-group-item .item-titulo-autor {
  display: grid;
  text-align: left;
  overflow: auto;
}

.listar-livro .list-group-item .item-botoes {
  display: grid;
}

.listar-livro .list-group-item .item-botoes .item-botao {
  width: 100%;
}
</style>