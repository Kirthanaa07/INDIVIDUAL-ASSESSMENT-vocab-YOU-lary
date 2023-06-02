import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-success">LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  // Clearing the app
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
