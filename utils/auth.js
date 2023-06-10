import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // It makes it prompt to choose a another google account
  // https://stackoverflow.com/questions/33782838/change-user-with-firebase-google-user-authentication

  provider.setCustomParameters({
    prompt: 'select_account'
  });
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  // clearing the app on SignOut
  document.querySelector('#app').innerHTML = '';
  firebase.auth().signOut();
};

export { signIn, signOut };
