import Firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyBGeENCVYw9RNLgCAAuHgan47YRrKi3Xhs',
  authDomain: 'atlantadatabase-f68d2.firebaseapp.com',
  databaseURL: 'https://atlantadatabase-f68d2.firebaseio.com',
  projectId: 'atlantadatabase-f68d2',
  storageBucket: 'atlantadatabase-f68d2.appspot.com',
  messagingSenderId: '952824147314',
  appId: '1:952824147314:web:5a9e5e7dd4148fe5'
}
// Initialize Firebase

let app = Firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export default db
