var app = new Vue({
    el: '#app',
    data: {
        livros: [
            { titulo: 'Aprender JavaScript', autor: 'Lewis Carrol' },
            { titulo: 'Aprender Vue', autor: 'Lewis Carrol' },
            { titulo: 'Criar algo incrível', autor: 'Lewis Carrol' }
        ],
        titulo: '',
        autor: '',
        ehEditar: false,
        selecionado: null
    },
    methods: {
        adicionar: function (titulo, autor) {
            this.livros.push({ titulo: titulo, autor: autor });
            this.titulo = '';
            this.autor = '';
        },
        editar: function (titulo, autor) {
            this.selecionado.titulo = titulo;
            this.selecionado.autor = autor;
            this.cancelar();
        },
        cancelar: function(){
            this.titulo = '';
            this.autor = '';
            this.selecionado = null;
            this.$nextTick(() => {
                this.ehEditar = false;
            });
        },
        selecionar: function (livro) {
            this.titulo = livro.titulo;
            this.autor = livro.autor;
            this.selecionado = livro;
            this.$nextTick(() => {
                this.ehEditar = true;
            });
        },
        remover: function (index) {
            this.livros.splice(index, 1);
        }
    }
})