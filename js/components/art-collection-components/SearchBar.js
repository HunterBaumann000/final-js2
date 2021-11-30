Vue.component('SearchBar', {
    props: {
        searchTerm: {
            type: String,
        },
    },

    methods: {

        SearchArt() {
            this.$emit('search-term', this.searchTerm)
        }
    },

    template: `
      
      <v-container>
    <v-row mt="5">
      <v-col
        cols="9"
      >
        <v-text-field
            outlined
            label="Search For Artwork"
            v-model="searchTerm"
          ></v-text-field>
          </v-col>
          
        <v-col
            cols="3"
           
        <SubmitButton
              button-text="Search"
              @submit-Btn="SearchArt"
          >
          </SubmitButton>
          </v-col>
    </v-row>
   
    </v-container>
    `

});