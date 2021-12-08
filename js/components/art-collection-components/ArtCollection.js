Vue.component('ArtCollection', {
    props: {},

    data() {
        return {
            q: '',
            limit: 150,
            results: [],
            noResults: true,
            searching: false,
            itemsAreDisplayed: false,
        }
    },
    methods: {

        getSearchTerm(term) {
            this.searching = true;
            //URL for image with user query
            let URL = "https://api.artic.edu/api/v1/artworks/search?q=" + term.toString() + "&limit=50";

            fetch(URL)
                .then(res => res.json()).then(res => {
                    console.log(res.data)
                    this.results = res.data;
                    this.searching = false;
                    this.itemsAreDisplayed = true;
                    this.noResults = this.results.length === 0;
                    this.q = term;

            });
        },
    },

    template: `
      <div>
        <div id="searchbarArea" class="mt-8" style="text-align: center">
            <h1 class="mb-5">Artwork Search</h1>
         <SearchBar @search-term="getSearchTerm"></SearchBar>
         <v-container> 
            <p v-if="searching"> searching... </p>
            <p v-if="itemsAreDisplayed"> Displaying {{results.length}} results related to "{{q}}" </p>
         </v-container>
         </div>
         <hr>
        
         <v-container v-if="noResults"> No results! Try searching for something..</v-container>
         
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        
        <v-flex v-for="result in results" v-bind:key="result.id">
        
        <art-piece-card
            :artwork-id="result.id"
        ></art-piece-card>

          </v-flex>
      </v-layout>
    </v-container>
    </div>
        
<!--        1. IIIF Image API endpoint in the config.iiif_url field-->
<!--        2. Append the image_id of the artwork as a segment to this URL-->
<!--        3.Append /full/843,/0/default.jpg to the URL-->
<!--        -->
<!--        https://www.artic.edu/iiif/2 + 1adf2696-8489-499b-cad2-821d7fde4b33 + /full/843,/0/default.jpg-->
<!--        https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg-->
<!--        Identifier looks like: bd4991b1-dd2c-da63-d259-14d908e00644 -->
    `

});