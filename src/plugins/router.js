import Vue from 'vue'
import Router from 'vue-router'
import CriarLivro from '@/components/CriarLivro.vue'
import EditarLivro from '@/components/EditarLivro.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/criar',
        component: CriarLivro
    }, {
        path: '/editar',
        component: EditarLivro
    }]
})