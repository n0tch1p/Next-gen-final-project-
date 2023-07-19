import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBhc11lzkPfdpNmvY1QKMwcyHkTMLFJTx4",
    authDomain: "nextgen-authen.firebaseapp.com",
    projectId: "nextgen-authen",
    storageBucket: "nextgen-authen.appspot.com",
    messagingSenderId: "455902629719",
    appId: "1:455902629719:web:b8464a789f1814e018b812",
    measurementId: "G-LBHDDJTWLR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth =  getAuth(app)

