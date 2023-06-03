import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import getMyVocabularyWithCategory from '../api/mergedData';
import showVocabulary from '../pages/vocabulary';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM

  // domEvents(); // ADD THE EVENT LISTENERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENERS TO THE DOM

  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies));
};

export default startApp;
