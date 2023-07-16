import{ auth } from "./config.js";
import{ signOut} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const logoutBtn = document.getElementById("logout-btn")

const email = document.getElementById('email')
const password = document.getElementById('Password')
const loginBtn = document.getElementById('login-btn')

const handlelogin = () => {
    signOut(auth).then(() => {
      alert('logout')
      window.location.replace('/login.html')
      }).catch((error) => {
        alert(error.code)
      });


loginBtn.addEventListener('click', loginRegister); 