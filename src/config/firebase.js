import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQmydPVFCtvZrqEiiKNOx0iCa7ThS6CHk",
    authDomain: "miladraza-portfolio.firebaseapp.com",
    projectId: "miladraza-portfolio",
    storageBucket: "miladraza-portfolio.appspot.com",
    messagingSenderId: "88881036192",
    appId: "1:88881036192:web:f79982351eb0c13c4b42c5"
});

const database = firebaseApp.firestore();

export { database };