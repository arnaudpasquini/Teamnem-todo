import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBqQb0Y01BcT3Xreynd0HQLWWflBckmQB0",
    authDomain: "teamnem-todo.firebaseapp.com",
    databaseURL: "https://teamnem-todo.firebaseio.com",
    projectId: "teamnem-todo",
    storageBucket: "teamnem-todo.appspot.com",
    messagingSenderId: "147779345333"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;