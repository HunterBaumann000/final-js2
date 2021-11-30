Vue.component('NavigationBar', {
    props: {

    },

    methods: {

    },


    template: `
<!--        -->
<!--        <ul class="list-unstyled components">-->
<!--            <li><router-link to="/home">Home</router-link></li>-->
<!--            <li><router-link to="/my-potlucks">My Potlucks</router-link></li>-->
<!--            <li><router-link to="/create">Create</router-link></li>-->
<!--            <li><router-link to="/potlucks">Potlucks</router-link></li>-->
<!--            <li><router-link to="/archive">Archive</router-link></li>-->
<!--            <li v-if="authUser"><a href="#" @click.prevent="logout">Logout</a></li>-->
<!--            <li v-else><a href="#" @click.prevent="login">Login</a></li>-->
<!--        </ul>-->

    <v-toolbar>
      <v-toolbar-title>Chicago Art Museum</v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-toolbar-items id="navbarItemPosition" class="text-xs-right">
      
        <v-btn><router-link to="/home">Home</router-link></v-btn>
        <v-btn ><router-link to="/search-artwork">Search Page</router-link></v-btn>
        <v-btn ><router-link to="/my-saved">My Saved Art</router-link></v-btn>
        <v-btn ><router-link to="/QnA">QnA</router-link></v-btn>
   
      </v-toolbar-items>
      
    </v-toolbar>
    
    
    `

});