const ListItemComponent = Vue.component('ListItem', {

    props:  {
        item: Object
    },

    computed: {
    },

    methods: {

        deleteItem() {
            this.$emit('remove-item', this.item)
        }

    },

    template:
        `
          <div>
          
            <art-piece-card
                :artwork-id="result.id"
                @delete-item="deleteItem"
                :item="item"
            ></art-piece-card>
            
          </div>`
});