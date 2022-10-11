// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authState } from 'rxfire/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDKub25O71Xifj_V1IcsbSKMUFpSQ5ZfMk',
	authDomain: 'shopping-cart-demo-1f39c.firebaseapp.com',
	projectId: 'shopping-cart-demo-1f39c',
	storageBucket: 'shopping-cart-demo-1f39c.appspot.com',
	messagingSenderId: '542422765503',
	appId: '1:542422765503:web:eda589f510b2acae4a1b0a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const user = authState(auth);
export const login = () => {
	signInWithPopup(auth, provider);
};
