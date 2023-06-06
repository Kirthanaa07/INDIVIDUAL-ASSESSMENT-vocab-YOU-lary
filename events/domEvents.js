import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import { showVocabulary } from '../pages/vocabulary';
import addVocabulariesForm from '../components/forms/addVocabulariesForm';
import { getMySingleVocabulary } from '../api/vocabularyData';

const domEvents = (user) => {
  document.querySelector('#content').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, vocabularyId] = e.target.id.split('--');

      getMySingleVocabulary(vocabularyId).then((vocabulary) => addVocabulariesForm(user.uid, vocabulary));
    }
  });

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

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCABULARY ITEM
    if (e.target.id.includes('add-vocabulary-btn')) {
      addVocabulariesForm(user.uid);
    }
  });
};

export default domEvents;
