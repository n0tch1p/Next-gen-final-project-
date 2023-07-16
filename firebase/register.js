import{ auth } from "./config.js";
import{ createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById('email')
const password = document.getElementById('password')
const registerBtn = document.getElementById('register-btn')

const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert(user.email)
    window.location.replace("/login.html")
  })
  .catch((error) => {
    alert(error.code)
   if (error.code  == 'auth/invalid-email'){
    errorMessage.textcontent = "invalid email "
   }
  });
}


registerBtn.addEventListener('click', handleRegister)