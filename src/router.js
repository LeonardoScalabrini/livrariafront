import Vue from 'vue'
import Router from 'vue-router'
import CriarLivro from '@/components/CriarLivro.vue'
import EditarLivro from '@/components/EditarLivro.vue'

Vue.use(Router)

export default new Router({
    mode: "hash",
    routes: [{
        path: '/',
        component: CriarLivro,
        name: 'adicionar'
    }, {
        path: '/editar',
        component: EditarLivro,
        name: 'editar'
    }]
})