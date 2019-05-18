import app from 'firebase/app'
import 'firebase/auth';
import React from "react";

const config = {
    apiKey: "AIzaSyAlJVfj1NdlCwat_x5r9vyPzBi1Q-Z-n68",
    authDomain: "mobileaccessories-fb6b5.firebaseapp.com",
    databaseURL: "https://mobileaccessories-fb6b5.firebaseio.com",
    projectId: "mobileaccessories-fb6b5",
    storageBucket: "mobileaccessories-fb6b5.appspot.com",
    messagingSenderId: "261199886686",
    appId: "1:261199886686:web:4ef87fdfb8b8f6cb"
}


class Firebase {
    constructor(){
        if(typeof window !== 'undefined') {
        app.initializeApp(config);
        this.auth= app.auth();
        this.googleProvider =  new app.auth.GoogleAuthProvider();
        this.uiConfig = {
            //configure FirebaseUI
            signInFlow: 'popup',
            callbacks: {
              // Avoid redirects after sign-in.
              signInSuccessWithAuthResult: (user) => {
                console.log(user);
                return false;
              }
            },
            signInOptions:[
              app.auth.GoogleAuthProvider.PROVIDER_ID
            ]
          }
          
        }
    }
}

export default Firebase;

const FirebaseContext = React.createContext(null);
export {FirebaseContext};