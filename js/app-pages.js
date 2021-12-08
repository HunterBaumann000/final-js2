const HomePage = Vue.component('HomePage', {
    props: {

    },


    template: `
       <div>
        <Carousel class="mt-5"></Carousel>

        <v-container class="mt-5">
        
        <v-row
          class="mt-4 "
          align="center"
          justify="center"
        >
          <div class="text-h4">
            Meet The Artists
          </div>
        </v-row>
            
            <v-row>
                <custom-card
                    card-image='https://upload.wikimedia.org/wikipedia/en/a/a5/Leonora_Carrington.jpg'
                    card-title="Leonora Carrington"
                    card-desc="Leonora was a British-born Mexican artist, surrealist painter, and novelist. She lived most of 
                    her adult life in Mexico City and was one of the last surviving participants in the surrealist movement of the 1930s."
                ></custom-card>
                
                <custom-card
                    card-image="https://www.alejandradeargos.com/images/Artistas/Peter_Doig.jpg"
                    card-title="Peter Doig"
                    card-desc=" One of the most renowned living figurative painters, he has settled in Trinidad since
                     2002. In 2007, his painting White Canoe sold at Sotheby's for $11.3 million, 
                     then an auction record for a living European artist."
                ></custom-card>

                <custom-card
                    card-image="http://www.omertiroche.com/wp-content/uploads/2017/06/matta-1.jpeg"
                    card-title="Roberto Matta"
                    card-desc="Roberto Matta was one of Chile's best-known painters and a seminal 
                    figure in 20th century abstract expressionist and surrealist art."
                ></custom-card>
            </v-row>
        </v-container>
       </div>
    `,
});

const SearchPage = Vue.component('SearchPage', {
    props: {

    },

    template: `
    <div style="margin-top: 1em; margin-bottom: 20em">    
      
       <ArtCollection>
        
       </ArtCollection>
    
    </div>
    `,
});

const MySavedPage = Vue.component('MySavedPage', {
    props: {
    },

    template: `
       <div style="margin-top: 1em; margin-bottom: 22em"> 
        <user-collection>
        </user-collection>
       </div>
    `,
});

const PostsPage = Vue.component('PostsPage', {
    props: {

    },

    template: `
      <div style="margin-top: 1em; margin-bottom: 31em">
           <user-posts></user-posts>
      </div>
    `,
});


//and so on