function ArtworkCollection(){

    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new ListItem(item));

        alert("test")
        return this;
    }
}

function ListItem(item){
    alert("ListItem")
    return item;

}

function Post(firstName, lastName, title, content,){
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.content = content;

}

function Artwork(id, currentArtwork) {
    this.id = id
    this.currentArtwork = currentArtwork;
}

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDk0qnTFlRwVFV_UVKDAL-nm-rYBW9nK0k",
    authDomain: "js-post-collection.firebaseapp.com",
    projectId: "js-post-collection",
    storageBucket: "js-post-collection.appspot.com",
    messagingSenderId: "919648265820",
    appId: "1:919648265820:web:3cc6865b46675dcf4ba899",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage().ref();
