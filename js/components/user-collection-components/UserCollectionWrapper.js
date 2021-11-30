Vue.component('UserCollectionWrapper', {
    props: {
        buttonText: {
            type: String,
            default: "Submit",
        },
    },

    methods: {

    },

    template: `
    <div>
      <div class="my-2" style="  
                        display: flex;
                        justify-content: center;
                        align-items: center;"
                        >
                        
        <h1> My Art Collections </h1>
      </div>
      <hr>
    </div>
    `

});