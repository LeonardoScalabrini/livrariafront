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
            <b-button class="item-botao" variant="success" @click="selecionar(livro)">Editar</b-button>
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
import mediator from "@/mediator";

export default {
  data() {
    return {
      livros: []
    };
  },
  methods: {
    selecionar(livro) {
      mediator.selecionarLivro(livro);
    },
    remover(index, livro) {
      this.$http.delete("/" + livro.id).then(() => {
        this.livros.splice(index, 1);
      });
    }
  },
  created() {
    mediator.adicionarLivroPublisher.addSubscriber(livro => {
      this.livros.push(livro);
    });
    mediator.buscarLivrosPublisher.addSubscriber(livros => {
      this.livros = livros;
    });
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