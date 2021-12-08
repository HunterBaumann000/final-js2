Vue.component('ArtPieceCard', {
    props: {
        artworkId: {
            type: Number,

        },
        currentArtwork: {
            type: [],

        },
        modalActive: {
            type: Boolean,
        },
        isSaved: {
            type:Boolean,
        }
    },

    methods: {

        saveToCollection() {

            const artwork = {
                Id: this.artworkId,
                details: this.currentArtwork,
            };

            alert(artwork.details.title + " has been saved!");
            this.$emit('save-artwork', artwork);
        },

        removeFromCollection() {
            this.$emit('remove-Artwork')
        },


        getArtDetails() {
            //artwork URL
            let ArtworkURL = "https://api.artic.edu/api/v1/artworks/" + (this.artworkId).toString() ;

            //fetch request for artwork data
            fetch(ArtworkURL)
                .then(res => res.json()).then(res => {
                this.currentArtwork = res.data;
            });
        },
    },

    created: function(){
        this.getArtDetails();
    },

    template: `
        <div>
          <v-card color="gray" width="300px">
            <v-card-title>{{currentArtwork.title}}</v-card-title>
                <div>
                <!-- gets image link with image ID-->
                    <v-img :src="'https://www.artic.edu/iiif/2/' + currentArtwork.image_id + '/full/843,/0/default.jpg'" height="200px"/>
                </div>
            <v-card-subtitle>
                Artist: {{currentArtwork.artist_title}}
                <br>
            </v-card-subtitle>
            <hr>
            <v-card-subtitle>
                <row>
                    <!-- Saves Art to User Collection if Not Saved Already-->
                    <v-btn small
                    color="primary"
                        v-if="!isSaved"
                        v-on:click="saveToCollection"
                    >Save</v-btn>
                    
                    <v-btn small
                        v-if="isSaved"
                        v-on:click="$emit('delete-item')"
                    >Delete</v-btn>
                   
                    <!-- Button and Modal are Tied Together -->
                    <ArtDescriptionModal
                    :artwork-id="artworkId"
                    :current-artwork="currentArtwork"
                        v-on:click="modalActive=true"    
                    ></ArtDescriptionModal> 
                 
                </row>
            </v-card-subtitle>
          </v-card>
          </div>
    `

});