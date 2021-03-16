import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

const Login = () => {
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            const {displayName, email} = result.user;
            const signInUser = {Name: displayName, email: email}
            var user = result.user;
            console.log(signInUser);
            
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
            }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;