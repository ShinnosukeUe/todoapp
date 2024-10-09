import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, signOut,GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyD8XHQzBWLzXCjaaYJfxR1gD-Gr1VN1TGI",
    authDomain: "",
    databaseURL: "https:/uetodo.firebaseio.com",
    projectId: "uetodo",
    storageBucket: "uetodo.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "",



};

let app;

export default defineNuxtPlugin(() => {
    if(!app){
        app = initializeApp(firebaseConfig);
    }
    
    const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

    const googleSignIn = async () => {
        
        
        try {
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    const googleSignOut = async () => {
        try {
            const app = initializeApp(firebaseConfig);

            const auth = getAuth(app);
            await signOut(auth);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return { googleSignIn, googleSignOut }


})




