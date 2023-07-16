import{ auth } from "./config.js";
import{ createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById('email')
const password = document.getElementById('Password')
const loginBtn = document.getElementById('login-btn')

const handlelogin = () => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
     alert("login successfull")
        window.location.replace('/index.html');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });


loginBtn.addEventListener('click', loginRegister); 