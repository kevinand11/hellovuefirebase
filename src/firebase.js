import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const config = {
	apiKey: 'AIzaSyDh7UwuWpmEyoppZdjngmMg-lZ3y9WVcrw',
	authDomain: 'hellofirebase-67e87.firebaseapp.com',
	databaseURL: 'https://hellofirebase-67e87.firebaseio.com',
	projectId: 'hellofirebase-67e87',
	storageBucket: 'hellofirebase-67e87.appspot.com',
	messagingSenderId: '554082425732',
	appId: '1:554082425732:web:585157b6170aff37b39bd1',
	measurementId: 'G-45G2BTZHBP',
}

Vue.use(VueFirestore)
firebase.initializeApp(config)

export default firebase
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const functions = firebase.functions()
