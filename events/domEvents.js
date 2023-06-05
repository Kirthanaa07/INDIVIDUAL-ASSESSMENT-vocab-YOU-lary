import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import { showVocabulary } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#filter-btn').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR filtering
    if (e.target.id.includes('filter-my-btn')) {
      // split used to split the id
      const [, categoryId] = e.target.id.split('--');
      console.warn(categoryId);
      getMyVocabularyWithCategory(user.uid, categoryId)
        .then((vocabularies) => showVocabulary(vocabularies));
    } else if (e.target.id.includes('filter-community-btn')) {
      // split used to split the id
      const [, categoryId] = e.target.id.split('--');
      console.warn(categoryId);
      getPublicVocabularyWithCategory(categoryId)
        .then((vocabularies) => showVocabulary(vocabularies));
    }
  });
};

export default domEvents;
