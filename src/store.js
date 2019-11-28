import Vue from 'vue';
import Vuex from 'vuex';
import axios from './plugins/axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        livros: [],
        livroSelecionado: {}
    },
    mutations: {
        buscarLivros(state, livros) {
            state.livros = livros;
        },
        removerLivro(state, index) {
            state.livros.splice(index, 1);
        },
        editarLivro(state, livro) {
            state.livroSelecionado.titulo = livro.titulo;
            state.livroSelecionado.autor = livro.autor;
        },
        selecionarLivro(state, index) {
            state.livroSelecionado = state.livros[index];
        },
        criarLivro(state, livro) {
            state.livros.push(livro);
        }
    },
    actions: {
        buscarLivros(context, filtro) {
            axios.get("/" + filtro).then(res => {
                context.commit('buscarLivros', res.data);
            });
        },
        removerLivro(context, payload) {
            axios.delete("/" + payload.livro.id).then(() => {
                context.commit('removerLivro', payload.index);
            });
        },
        editarLivro(context, livro) {
            axios.put("/", livro).then(() => {
                context.commit('editarLivro', livro);
            });
        },
        selecionarLivro(context, index) {
            context.commit('selecionarLivro', index);
        },
        criarLivro(context, livro) {
            axios.post("/", livro).then(res => {
                context.commit('criarLivro', res.data);
            });
        }
    },
    getters: {
        getLivros: (state) => {
            return state.livros;
        },
        getLivroSelecionado: (state) => {
            return state.livroSelecionado;
        }
    }
});