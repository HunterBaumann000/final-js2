Vue.component('CustomCard', {
    props: {
        cardTitle: {
            type: String,
            required: true
        },
        cardImage: {
            type: String,
            required: true
        },
        cardDesc: {
            type: String,
            required: true
        }

    },

    methods: {

    },

    template: `
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="300"
      :key="i"
       v-bind:src="cardImage"
    ></v-img>

    <v-card-title>{{cardTitle}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >     
      </v-row>
      
      <div class="my-4 text-subtitle-1">
      <hr class="mb-2">
         {{cardDesc}}
      </div>

    </v-card-text>
    `

});