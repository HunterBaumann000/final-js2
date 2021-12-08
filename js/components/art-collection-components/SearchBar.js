Vue.component('SearchBar', {
    props: {
        searchTerm: {
            type: String,
        },
    },

    methods: {

        SearchArt() {
            //emits user's search term
            this.$emit('search-term', this.searchTerm)
        }
    },

    template: `
      
   <v-container class="x-16">
    <v-row>
        <v-text-field
              filled outlined 
              label="Search For Artwork"
              v-model="searchTerm"
            ></v-text-field> 
            
            <v-btn 
                x-large
                v-on:click="SearchArt"
                >
                <v-icon>search</v-icon>
            </v-btn>
    </v-row>
   
    </v-container>
    `

});