import { createRouter, createWebHistory } from 'vue-router';
import home from "@/view/home.vue";
import login from "@/view/login.vue";
import register from "@/view/register.vue";
import contact from '@/view/contact.vue';
import books from '@/view/books.vue';
import bookDetail from '@/view/bookDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
         path: "/",
         name: "home",
         component: home
        },
        {
         path: "/books",
         name: "books",
         component: books
        },
        {
        path: '/books/:id',
        name: 'bookDetail',
        component: bookDetail
        },
        {
         path: "/contact",
         name: "contact",
         component: contact
        },
        {
         path: "/login",
         name: "login",
         component: login
        },
        {
         path: "/register",
         name: "register",
         component: register
        }
    ],
    linkActiveClass: 'active-link',
});

export default router;