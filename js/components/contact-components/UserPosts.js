Vue.component('UserPosts', {
    props: {
        userPost: Object,
    },

    data:{
        posts: [],
    },

    firestore: {
        posts: db.collection('user-post-collection'),
    },

    methods: {
        addPostToList(post){

            this.userPost = post;

            const thePost = {
                firstName: post.firstName,
                lastName: post.lastName,
                title: post.title,
                content: post.content,
            };

            this.posts.push(thePost)


            db.collection('user-post-collection')
                .add(thePost)
                .then((docRef) => {
                    console.log("Document added", docRef);

                });


        }
    },


    template: `
      <div>
      <div class="my-2" style="  
                        display: flex;
                        justify-content: center;
                        align-items: center;"
                        >
                        
        <h1> Artwork Post Board </h1>
      </div>
      <hr>
    
    <v-container class="mt-5">
    
    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
    
    <v-expansion-panel class="mb-5">
        <v-expansion-panel-header> Sample Title</v-expansion-panel-header>
        <v-expansion-panel-content>
         Here is some content
            <br><br><hr>
          Posted by: John Smith
        </v-expansion-panel-content>
        </v-expansion-panel>
        
        
        <post-component 
        
                    v-for="post in posts"  
                    :post="post"
                    :key="post.content"
                    
                    first-name=post.firstName
                    last-name="post.lastName"
                    content="post.firstName"
                    title="post.firstName"
        ></post-component>
        
    </v-expansion-panels>
    </v-container>
   
    <post-form
        @add-post="addPostToList"
    ></post-form>
    
  </div>
  
    `

});