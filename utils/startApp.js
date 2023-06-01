import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';

const startApp = () => {
  domBuilder(); // BUILD THE DOM

  // domEvents(); // ADD THE EVENT LISTENERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENERS TO THE DOM

  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
