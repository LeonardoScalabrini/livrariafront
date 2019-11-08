<template>
  <div class="usuario-detalhe">
    <ul>
      <li v-for="(livro, index) in livros" :key="livro.id">
        <div>
          <div>
            <big>{{ livro.titulo }}</big>
            <small>{{ livro.autor }}</small>
          </div>
          <div>
            <button @click="selecionar(livro)">Editar</button>
            <button @click="remover(index, livro)">Remover</button>
          </div>
        </div>
      </li>
    </ul>
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
    remover(index) {
      this.livros.splice(index, 1);
    }
  },
  created() {
    mediator.adicionarLivroPublisher.addSubscriber(livro => {
      this.livros.push(livro);
    });
  }
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>