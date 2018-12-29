import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCgyGTsqOw0AaLLLIFSW6uhfngNqA0W0YI",
    authDomain: "metolius-63447.firebaseapp.com",
    databaseURL: "https://metolius-63447.firebaseio.com",
    projectId: "metolius-63447",
    storageBucket: "metolius-63447.appspot.com",
    messagingSenderId: "912455902799"
}
firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export { auth, db }