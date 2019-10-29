var app = new Vue({
    el: '#app',
    data: {
        livros: [],
        titulo: '',
        autor: '',
        filtro: '',
        ehEditar: false,
        selecionado: null
    },
    methods: {
        adicionar: function (titulo, autor) {
            Vue.http.post("http://localhost:8080/livraria", { titulo: titulo, autor: autor })
                .then(response => {
                    this.livros.push(response.body);
                    this.titulo = '';
                    this.autor = '';
                    Swal.fire('Sucesso!', 'Livro adicionado com sucesso!', 'success');
                }, response => {
                    Swal.fire('Oops!', 'Algo deu errado!', 'error');
                });
        },
        editar: function (titulo, autor) {
            Vue.http.put("http://localhost:8080/livraria", { id: this.selecionado.id, titulo: titulo, autor: autor })
                .then(response => {
                    this.selecionado.titulo = titulo;
                    this.selecionado.autor = autor;
                    this.cancelar();
                    Swal.fire('Sucesso!', 'Livro editado com sucesso!', 'success');
                }, response => {
                    Swal.fire('Oops!', 'Algo deu errado!', 'error');
                });
        },
        buscar: function (filtro) {
            Vue.http.get("http://localhost:8080/livraria/" + filtro)
                .then(response => {
                    this.$nextTick(() => {
                        this.livros = response.body;
                        
                        if (response.body.length == 0)
                            Swal.fire('Oops!', 'Nenhum livro foi encontrado!', 'success');
                    });
                }, response => {
                    Swal.fire('Oops!', 'Algo deu errado!', 'error');
                });
        },
        cancelar: function () {
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
        remover: function (index, livro) {
            Vue.http.delete("http://localhost:8080/livraria/" + livro.id)
                .then(response => {
                    this.livros.splice(index, 1);
                    Swal.fire('Sucesso!', 'Livro removido com sucesso!', 'success');
                }, response => {
                    Swal.fire('Oops!', 'Algo deu errado!', 'error');
                });
        }
    }
})