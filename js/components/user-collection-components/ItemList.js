
const ListComponent = Vue.component('ItemList', {

    props: {
        name: {
            type: String,
            default: "Art Collection"
        },

        ItemList: {
            type: Object,

        }
    },


    methods: {

    },

    template: `
            <div class="collection-list">
                <h3>{{name}}</h3>
                <list-item v-for="item in ItemList"
                           :item="item"
                           :key="item.name"
                           @remove-item="$emit('remove-item', item)">
                          
                </list-item>
                <p>
                  <br>
                    <small>Total Saved Pieces: {{ItemList.length}}</small>
                </p>
            </div>
    `
});


