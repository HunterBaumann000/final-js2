Vue.component('SubmitButton', {
    props: {
        buttonText: {
            type: String,
            default: "Submit",
        },
    },

    methods: {
        doTask(){
            this.$emit('submit-Btn')
        },
    },

    template: `
      <v-btn 
             dark x-large
             color="purple"
             @click.prevent="doTask"
             >
        {{buttonText}}
      </v-btn>
    `

});