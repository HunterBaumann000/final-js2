Vue.component('PostForm', {
    props: {

    },

    data: () => ({
        dialog: false,

        userPost: Object,
    }),

    methods: {
        addPost(){
            alert(this.userPost.firstName)
            this.$emit('add-post', this.userPost)
        }
    },


    template: `
<div>      
     <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Post a Comment
        </v-btn>
      </template>
      
      <v-card>
        <v-form>
        <v-card-title>
          <span class="text-h5">Write Comment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="first name*"
                  v-model="userPost.firstName"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="last name"
                  v-model="userPost.lastName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Post Title"
                  required
                  v-model="userPost.title"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Post Content"
                  v-model="userPost.content"
                  required
                ></v-text-field>
              </v-col>
             
             
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            type="submit"
            color="blue darken-1"
            text
            @click="dialog = false"
            v-on:click="addPost"
            
          >
            Save
          </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
      </v-form>
    </v-dialog>
  </v-row>
  
      <div>
      <v-btn
      class="v-btn--bottom v-btn--is-elevated v-btn--fab v-btn--fixed v-btn--right v-btn--round"
      fab
      dark
      large
      color="black"
      @click="dialog = true"
    >
        <v-icon dark>
            mdi-pencil
        </v-icon>
      </v-btn>
    </div>
    
    </div>
    `

});