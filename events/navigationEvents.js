import { getAllCategory, getMyCategory } from '../api/categoryData';
import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import communityVocabularyFilterActions from '../pages/community';
import { showVocabulary, myVocabularyFilterActions } from '../pages/vocabulary';

const navigationEvents = (user) => {
  // My Vocabulary link
  document.querySelector('#my-vocabulary')
    .addEventListener('click', () => {
      getMyCategory(user.uid).then((categories) => myVocabularyFilterActions(categories));
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies));
    });

  // Community link
  document.querySelector('#community')
    .addEventListener('click', () => {
      getAllCategory().then((categories) => communityVocabularyFilterActions(categories));
      getPublicVocabularyWithCategory().then((vocabularies) => showVocabulary(vocabularies));
    });
};

export default navigationEvents;
