Vue.component('Card', {
    props: {

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
      height="250"
      src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
    ></v-img>

    <v-card-title>{{}} Blah Blah</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >     
      </v-row>

      <div class="my-4 text-subtitle-1">
         Blah Blah
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>
    `

});