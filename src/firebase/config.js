import {
    initializeApp
} from "firebase/app";

// This function initializes the Firebase app and returns it.
const firebaseConfig = {
    apiKey: "AIzaSyAxKbt0tKovr4w96V7BWYiS2nNufuyBGAk",
    authDomain: "bella-vita-shop.firebaseapp.com",
    projectId: "bella-vita-shop",
    storageBucket: "bella-vita-shop.appspot.com",
    messagingSenderId: "535260371194",
    appId: "1:535260371194:web:eeb628c6738ddab8e41143"
};

const app = initializeApp(firebaseConfig)

export default function getFirestoreApp() {
    return app
}