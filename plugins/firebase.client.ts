import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {

    const firebaseConfig = {
        apiKey: "AIzaSyD8XHQzBWLzXCjaaYJfxR1gD-Gr1VN1TGI",
        authDomain: "",
        databaseURL: "https:/uetodo.firebaseio.com",
        projectId: "uetodo",
        storageBucket: "uetodo.appspot.com",
        messagingSenderId: "",
        appId: "",
        measurementId: "",

        

    }

    const app = initializeApp(firebaseConfig)
   

    
})

