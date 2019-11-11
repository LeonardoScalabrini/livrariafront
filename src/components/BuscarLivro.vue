<template>
  <div class="buscar-livro">
    <div>
      <div>
        <input v-model="filtro" type="text" placeholder="Buscar livro" />
      </div>
      <div>
        <button @click="buscar()">Buscar</button>
      </div>
    </div>
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

<style>
</style>