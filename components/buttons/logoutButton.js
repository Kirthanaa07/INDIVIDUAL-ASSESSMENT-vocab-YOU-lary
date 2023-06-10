import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">LOGOUT</button>';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#logout-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
