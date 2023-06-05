import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import { getMyVocabularyWithCategory } from '../api/mergedData';
import { showVocabulary, myVocabularyFilterActions } from '../pages/vocabulary';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import { getMyCategory } from '../api/categoryData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM

  domEvents(user); // ADD THE EVENT LISTENERS TO THE DOM
  // formEvents(); // ADD FORM EVENT LISTENERS TO THE DOM

  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getMyCategory(user.uid).then((categories) => myVocabularyFilterActions(categories));
  getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies));
};

export default startApp;
