import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

interface UserData {
  uid: string;
  weight: { date: Date; weight: number }[];
}

const auth = getAuth();

const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      const usersRef = doc(db, 'users', user.uid);
      const usersSnap = await getDoc(usersRef);

      if (usersSnap.exists()) {
        console.log('User doc already created.');
      } else {
        setDoc(doc(db, 'users', user.uid), <UserData>{
          uid: user.uid,
          weight: [],
        });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(`User ${userCredential.user.email} logged in`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export { signIn, signUp };
