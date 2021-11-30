Vue.component('ArtCollection', {
    props: {},

    data() {
        return {
            q: '',
            maxResults: 36,
            //mediaType: 'all',
            results: [],
            noResults: false,
            //searching: false,
            //itemsAreDisplayed: false,
            imageURL: '',
        }
    },
    methods: {

        //issue is how im searching for the artwork. artwork will show if queries from just art works


        getSearchTerm(term) {
            this.searching = true;

            let URL = "https://api.artic.edu/api/v1/artworks?fields=id,";

            const params = {
                q: term,
                limit: 100,
            }
            const options = {
                method: 'POST',
                body: JSON.stringify(params)
            };

            fetch(URL + term.toString())
                .then(res => res.json()).then(res => {
                this.results = res.data;
                // this.searching = false;
                // this.itemsAreDisplayed = true;
                // this.config = res.config;
                // this.noResults = this.results.length === 0;

            });
        },
    },

    template: `
      <div>
        <br> <br>
         <SearchBar @search-term="getSearchTerm"></SearchBar>
         <hr>
         <br>
         <v-container fluid>
            <div v-for="result in results" v-bind:key="result.id">
                <div>{{result.title}} {{result.last_updated}}</div>
                <div>{{result.artist_title}}</div>
                <v-img :src="'https://www.artic.edu/iiif/2/' + result.image_id + '/full/843,/0/default.jpg'">
              
                
            </div>
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