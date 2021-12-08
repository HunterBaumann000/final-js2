Vue.component('CustomFooter', {
    props: {
        footerText: {
            type: String,
            default: 'Vuetify',
        },
        footerDate: {
            type: Number,
            default: new Date().getFullYear(),
        }
    },

    data: () => ({

        footerItems:{
            facebook:{
                text:'Facebook',
                url:'https://www.facebook.com/artic/'
            },
            instagram:{
                text: 'Instagram',
                url:'https://www.instagram.com/artinstitutechi/?hl=en'
            },
            apiDoc:{
                text: 'API',
                url:'https://api.artic.edu/docs/#scraping-images'
            },
            about:{
                text: 'About',
                url:'https://www.artic.edu/visit#faqs'
            },
            contact:{
                text: 'Contact',
                url:'https://www.artic.edu/visit#hours'
            }
        },
    }),

    methods: {

    },

    template: `
      <v-footer
      dark
      padless
    >
      <v-card
        width="100%"
        flat
        tile
        class="white--text text-center"
      >
      
        <v-card-text>
          <v-btn
            v-for="item in footerItems"
            class="mx-4 white--text"
            :href='item.url'
          >
            {{item.text}}
          </v-btn>
        </v-card-text>
        <v-divider class="blue"></v-divider>
    
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} &copy Chicago Art Institute
        </v-card-text>
        
      </v-card>
    </v-footer>
    `
});