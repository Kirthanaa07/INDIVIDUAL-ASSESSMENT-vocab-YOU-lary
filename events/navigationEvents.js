import { getAllCategory, getMyCategory } from '../api/categoryData';
import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import communityVocabularyFilterActions from '../pages/community';
import { showVocabulary, myVocabularyFilterActions } from '../pages/vocabulary';
import { communityFilterActionEvents, myFilterActionEvents } from './filterActionEvents';

const navigationEvents = (user) => {
  // My Vocabulary link
  document.querySelector('#my-vocabulary')
    .addEventListener('click', () => {
      getMyCategory(user.uid).then((categories) => {
        myVocabularyFilterActions(categories);
        myFilterActionEvents(user);
      });
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies, user.uid));
    });

  // Community link
  document.querySelector('#community')
    .addEventListener('click', () => {
      getAllCategory().then((categories) => {
        communityVocabularyFilterActions(categories);
        communityFilterActionEvents(user);
      });
      getPublicVocabularyWithCategory().then((vocabularies) => showVocabulary(vocabularies, user.uid));
    });
};

export default navigationEvents;
