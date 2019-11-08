import Vue from 'vue'
import Publisher from "@/publisher.js";

export default new Vue({
    data: {
        adicionarLivroPublisher: new Publisher(),
        selecionarLivroPublisher: new Publisher(),
        editarLivroPublisher: new Publisher(),
        removerLivroPublisher: new Publisher(),
        cancelarEdicaoLivroPublisher: new Publisher()
    },
    methods: {
        adicionarLivro(event) {
            this.adicionarLivroPublisher.notifySubscribers(event);
        },
        selecionarLivro(event) {
            this.selecionarLivroPublisher.notifySubscribers(event);
        },
        editarLivro(event) {
            this.editarLivroPublisher.notifySubscribers(event);
        },
        cancelarEdicaoLivro(event) {
            this.cancelarEdicaoLivroPublisher.notifySubscribers(event);
        }
    }
})