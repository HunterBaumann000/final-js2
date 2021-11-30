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

    methods: {

    },

    template: `
      <v-footer height="auto">
            <v-flex xs3 layout column pr-1>
              <span class="title ">CONTACT</span>
              <hr width="90%">
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Loan Officer
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Branch Near You
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-building</v-icon>
                750 S Main St. Bountiful, UT 84010
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-envelope</v-icon>
                info@city1st.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-phone</v-icon>
                801-299-1770
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-print</v-icon>
                 801-299-1769
              </div>
            </v-flex>
            
             <v-flex xs3 layout column pr-1>
              <span class="title ">Media</span>
              <hr width="90%">
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Loan Officer
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Branch Near You
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-building</v-icon>
                750 S Main St. Bountiful, UT 84010
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-envelope</v-icon>
                info@city1st.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-phone</v-icon>
                801-299-1770
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-print</v-icon>
                 801-299-1769
              </div>
            </v-flex>
                        
            <v-flex xs3 layout column pr-1>
              <span class="title ">About Us</span>
              <hr width="90%">
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Loan Officer
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Branch Near You
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-building</v-icon>
                750 S Main St. Bountiful, UT 84010
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-envelope</v-icon>
                info@city1st.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-phone</v-icon>
                801-299-1770
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-print</v-icon>
                 801-299-1769
              </div>
            </v-flex>
            <v-flex xs3 layout column pr-1>
              <span class="title ">Resources</span>
              <hr width="90%">
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Loan Officer
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-map-marker-alt</v-icon>
                Find a Branch Near You
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-building</v-icon>
                750 S Main St. Bountiful, UT 84010
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-envelope</v-icon>
                info@city1st.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-phone</v-icon>
                801-299-1770
              </div>
              <div>
                <v-icon size="18px" class="mr-3 white--text">fas fa-print</v-icon>
                 801-299-1769
              </div>
            </v-flex>
          
            <v-col class="text-center light grey" cols="12">
                {{ footerDate }} - <strong> {{ footerText }} </strong>
            </v-col>
      
    </v-footer>
    `
});