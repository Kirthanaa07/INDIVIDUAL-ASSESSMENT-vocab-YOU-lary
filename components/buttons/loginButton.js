import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<div class="flex-fill">
    <div class="d-flex flex-column">
      <p id="login-text">Welcome to VOCAB-YOU-lary!!! Project</p>
      <div class="d-flex flex-grow-1 justify-content-center"><btn id="google-auth">LOGIN</btn></div>
    </div>
  </div>`;
  document.querySelector('#login-form-container').innerHTML = domString;
  // Clearing the app
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
