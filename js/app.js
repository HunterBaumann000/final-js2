Vue.use(Vuetify);



const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage }, // default page
        { name: 'home', path: '/home', component: HomePage, props: true },
        { name: 'searchPage', path: '/search-artwork', component: SearchPage, props: true },
        { name: 'mySavedPage', path: '/my-saved', component: MySavedPage },
        { name: 'QnAPage', path: '/QnA', component: QnAPage },
    ],
});


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#6f1483'
                }
            }
        }
    }),

    router: router,

    data: {

    },

    methods: {

    },

    computed: {

    },


});