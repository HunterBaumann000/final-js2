Vue.component('Carousel', {
        props: {

        },

        methods: {

        },
    data () {
        return {
            items: [
                {
                    src: 'https://cdn.theculturetrip.com/wp-content/uploads/2019/05/feature_j87t9a.jpg',
                },
                {
                    src: 'https://cdn.thecollector.com/wp-content/uploads/2020/07/art-institute-of-chicago.jpg',
                },
                {
                    src: 'https://medias.gazette-drouot.com/prod/medias/mediatheque/66062.jpg',
                },
                {
                    src: 'https://www.saic.edu/sites/default/files/styles/image_gallery_full/public/grad_aic_museum.jpg?itok=xVCJ2L8h',
                },
            ],
        }
    },

    template: `
<v-container>
        <v-row
          class="mt-4 mb-8"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Chicago Art Institute
          </div>
        </v-row>
        
    <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
 </v-container> 
    `

});