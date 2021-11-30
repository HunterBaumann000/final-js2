const HomePage = Vue.component('HomePage', {
    props: {

    },

    template: `
       <div>
        <Carousel></Carousel>

        <v-container>
            <v-row>
                <card></card>
                <card></card>
                <card></card>
            </v-row>
        </v-container>
       </div>
    `,
});

const SearchPage = Vue.component('SearchPage', {
    props: {

    },

    methods: {

    },

    template: `
    <div style="margin-top: 1em; margin-bottom: 20em">      
       <ArtCollection></ArtCollection>
    
    </div>
    `,
});

const MySavedPage = Vue.component('MySavedPage', {
    props: {

    },

    template: `
       <div style="margin-top: 1em; margin-bottom: 28em"> 
        <userCollectionWrapper></userCollectionWrapper>
       </div>
    `,
});

const QnAPage = Vue.component('QnAPage', {
    props: {

    },

    template: `
      <div style="margin-top: 1em; margin-bottom: 28em">
        <div>
      <div class="my-2" style="  
                        display: flex;
                        justify-content: center;
                        align-items: center;"
                        >
                        
        <h1> Artwork QnA </h1>
      </div>
      <hr>
    </div>
      </div>
    `,
});


//and so on