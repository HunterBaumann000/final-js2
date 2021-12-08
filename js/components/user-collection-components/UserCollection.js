Vue.component('UserCollection', {
    props: {
        userCollection: Object,
    },

    methods: {
        save(artwork){
            // save to object or array

        }

    },

    template: `
    <div>
        <div class="mt-8" style="text-align: center">
            <h1> My Art Collection</h1>
        </div>
        <hr>
        
        <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
 
        <v-flex>
        
         <!-- v-for -->
            <art-piece-card
                :artwork-id="129884"
                @save-artwork="save"
                :isSaved="true"
            ></art-piece-card>

          </v-flex>
      </v-layout>
    </v-container>
       
      <div class="mb-10"></div>
    </div>
    `

});