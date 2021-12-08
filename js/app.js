Vue.use(Vuetify);


//Router components
const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage }, // default page
        { name: 'home', path: '/home', component: HomePage, props: true },
        { name: 'searchPage', path: '/search-artwork', component: SearchPage, props: true },
        { name: 'mySavedPage', path: '/my-saved', component: MySavedPage },
        { name: 'postsPage', path: '/posts-page', component: PostsPage },
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
            },
            icons: {
                iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
            },
        }
    }),

    router: router,

    data: {
       ItemList: new ArtworkCollection()
    },

    methods: {
        addItem(artwork) {

            this.ItemList.addItem(artwork);
            alert("Test in methods");

        },

        removeItem(artwork){

            this.ItemList.splice(this.ItemList.indexOf(artwork), 1);

        },
    },

    computed: {

    },


});