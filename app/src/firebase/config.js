import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWAp9g0t1NAt508HwD6n-4dU7jjkYyBJA",
  authDomain: "velostore-124cf.firebaseapp.com",
  databaseURL:
    "https://velostore-124cf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "velostore-124cf",
  storageBucket: "velostore-124cf.appspot.com",
  messagingSenderId: "22268236240",
  appId: "1:22268236240:web:baa2c021174f5d0998a9d5",
  measurementId: "G-MV2BFNX3T3",
};

const firebaseConfigStorage = {
  apiKey: "AIzaSyAWAp9g0t1NAt508HwD6n-4dU7jjkYyBJA",
  authDomain: "velostore-124cf.firebaseapp.com",
  databaseURL: "gs://velostore-124cf.appspot.com",
  storageBucket: "Velos"
};

const app = initializeApp(firebaseConfig);
//const firebaseApp = initializeApp(firebaseConfigStorage);

//const storage = getStorage(firebaseApp);
export { app };
