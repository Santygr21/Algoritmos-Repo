// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6vAGNjUvR_Emhuvzmx0vxEE5qnCtpUro",
  authDomain: "databaset6.firebaseapp.com",
  projectId: "databaset6",
  storageBucket: "databaset6.appspot.com",
  messagingSenderId: "892864469705",
  appId: "1:892864469705:web:5ca19576bd2188f4d2cb18",
  measurementId: "G-Y03EZV0GM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"profile");

export const queryUser = async ({
  user,
  password
}:{
  user: string;
  password: string;
}) => {
  try {
      const q = query(usersRef, where("user", "==", user));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc:any) => {
          console.log(doc.id,"=>",doc.data());
      });

      return !querySnapshot.empty;
  } catch (error) {
      return false;
  }
}

export const addUser = async ({
  user,
  password
}:{
  user: string;
  password: string;
}) => {
  try {
      const docRef = await addDoc(collection(db,"profile"),{
          user,
          password
      });
      console.log(docRef.id);
      return docRef.ref;
  } catch (error) {
    console.error(error);
      return false;
  }
}


