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
      <div class="my-2">
      <v-btn 
             type="submit"
             color="purple"
             @click.prevent="doTask"
             block dark x-large>
        {{buttonText}}
      </v-btn>
      </div>
    `

});