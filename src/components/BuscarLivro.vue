<template>
  <div class="buscar-livro">
    <b-form-input v-model="filtro" type="text" placeholder="Buscar livro" />
    <b-button variant="outline-primary" @click="buscar()">Buscar</b-button>
  </div>
</template>

<script>
import mediator from "@/mediator";

export default {
  data() {
    return {
      filtro: ""
    };
  },
  methods: {
    buscar() {
      this.$http.get("/" + this.filtro).then(res => {
        mediator.buscarLivros(res.data);
        this.filtro = "";
      });
    }
  },
  created() {}
};
</script>

<style scoped>
.buscar-livro {
  display: flex;
}
.buscar-livro input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.buscar-livro button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>