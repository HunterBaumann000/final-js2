Vue.component('PostComponent', {
    props: {
        title: {String, required: true},
        content: {String, required: true},
        firstName: {String, required: true},
        lastName: {String, required: true}

    },

    methods: {

    }
    ,

    template: `

      <v-expansion-panel class="mb-5">
      
        <v-expansion-panel-header> {{title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
         {{content}}
           <br><br><hr>
          Posted by: {{firstName}} {{lastName}}
        </v-expansion-panel-content>
      </v-expansion-panel>
      
    `

});