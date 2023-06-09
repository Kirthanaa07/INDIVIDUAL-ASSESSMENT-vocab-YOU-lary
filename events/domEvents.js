import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import { showVocabulary } from '../pages/vocabulary';
import addVocabulariesForm from '../components/forms/addVocabulariesForm';
import addCategoriesForm from '../components/forms/addCategoriesForm';
import { getMySingleVocabulary, deleteMyVocabulary } from '../api/vocabularyData';

const domEvents = (user) => {
  document.querySelector('#content').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocabulary-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, vocabularyId] = e.target.id.split('--');

        deleteMyVocabulary(vocabularyId).then(() => {
          getMyVocabularyWithCategory(user.uid).then((data) => showVocabulary(data, user.uid));
        });
      }
    }
    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, vocabularyId] = e.target.id.split('--');

      getMySingleVocabulary(vocabularyId).then((vocabulary) => addVocabulariesForm(user.uid, vocabulary));
    }
  });

  document.querySelector('#filter-actions').addEventListener('click', (e) => {
    // CLICK EVENT FOR filtering
    if (e.target.id.includes('filter-my-btn')) {
      // split used to split the id
      const [, categoryId] = e.target.id.split('--');
      getMyVocabularyWithCategory(user.uid, categoryId === 'all' ? null : categoryId)
        .then((vocabularies) => showVocabulary(vocabularies, user.uid));
    } else if (e.target.id.includes('filter-community-btn')) {
      // split used to split the id
      const [, categoryId] = e.target.id.split('--');
      getPublicVocabularyWithCategory(categoryId === 'all' ? null : categoryId)
        .then((vocabularies) => showVocabulary(vocabularies, user.uid));
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCABULARY ITEM
    if (e.target.id.includes('add-vocabulary-btn')) {
      addVocabulariesForm(user.uid);
    }
    if (e.target.id.includes('add-category-btn')) {
      addCategoriesForm();
    }
  });
};

export default domEvents;
