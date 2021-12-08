Vue.component('ArtDescriptionModal', {
    props: {
        artworkId: {
            type: Number,
            required: true,
        },
        currentArtwork: {
            type: [],
        },
    },

    methods: {

    },

    template: `        

      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
      
        <template v-slot:activator="{on, attrs}">
          <v-btn
            small
            color="primary"
            v-bind="attrs"
            v-on="on"
          >View Description</v-btn>
        </template>
        
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >{{currentArtwork.title}}</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-6">
                <v-img :src="'https://www.artic.edu/iiif/2/' + currentArtwork.image_id + '/full/843,/0/default.jpg'"/>
              </div>
              <hr>
              <div>
                
                <div class="mt-2"><b>Artist</b>: {{currentArtwork.artist_title}}</div>
                
                <div><b>Original Date</b>: {{currentArtwork.date_display}}</div>
                
                <div v-if="currentArtwork.style_title"><b>Style of Art</b>: {{currentArtwork.style_title}}</div>
                
                <div v-if="currentArtwork.place_of_origin" ><b>Place of Origin</b>: {{currentArtwork.place_of_origin}}</div>
                
                <br><hr>
                <div class="mt-1" v-if="currentArtwork.thumbnail.alt_text"><b>Artwork Description</b>: {{currentArtwork.thumbnail.alt_text}}</div>
                
              </div>
              
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
        
      </v-dialog>
    `

});