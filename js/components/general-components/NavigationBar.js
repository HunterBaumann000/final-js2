Vue.component('NavigationBar', {
    props: {

    },

    methods: {

    },


    template: `

        <v-app-bar dark>
          <v-toolbar-title class="white--text">Chicago Art Institute</v-toolbar-title>
          <v-spacer></v-spacer>
            <router-link class="white--text" to="/home"><v-btn plain> Home </v-btn></router-link>
            <router-link class="white--text" to="/search-artwork"><v-btn plain> Search Page </v-btn></router-link></v-btn>
            <router-link class="white--text" to="/my-saved"><v-btn plain> My Saved Art </v-btn></router-link></v-btn>
            <router-link class="white--text" to="/posts-page"><v-btn plain> Post Board </v-btn></router-link></v-btn>
        </v-app-bar>
      
    `

});