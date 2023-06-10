import { getMyVocabularyWithCategory } from '../api/mergedData';
import { myVocabularyFilterActions, showVocabulary } from '../pages/vocabulary';
import { createMyVocabulary, updateMyVocabulary } from '../api/vocabularyData';
import { createMyCategory, getMyCategory, updateMyCategory } from '../api/categoryData';
import { myFilterActionEvents } from './filterActionEvents';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocabulary')) {
      // CLICK EVENT FOR ADDING A VOCABULARY
      const currentDate = (new Date()).toISOString();
      const payload = {
        title: document.querySelector('#title').value,
        isPublic: document.querySelector('#isPublic').checked,
        category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#definition').value,
        time_submitted: currentDate,
        user_id: user.uid,
        user_name: user.displayName
      };

      createMyVocabulary(payload).then(({ name }) => {
        const patchPayload = { vocabulary_id: name };

        updateMyVocabulary(patchPayload).then(() => {
          getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies, user.uid));
        });
      });
    } else if (e.target.id.includes('update-vocabulary')) {
      // CLICK EVENT FOR EDITING A VOCABULARY
      const [, vocabularyId] = e.target.id.split('--');
      const currentDate = (new Date()).toISOString();
      const payload = {
        title: document.querySelector('#title').value,
        isPublic: document.querySelector('#isPublic').checked,
        category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#definition').value,
        time_submitted: currentDate,
        user_id: user.uid,
        user_name: user.displayName,
        vocabulary_id: vocabularyId
      };

      updateMyVocabulary(payload).then(() => {
        getMyVocabularyWithCategory(user.uid).then((data) => showVocabulary(data, user.uid));
      });
    }
  });
  document.querySelector('#form-container-category').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-category')) {
      // CLICK EVENT FOR ADDING A CATEGORY
      const payload = {
        name: document.querySelector('#name').value,
        user_id: user.uid,
        user_name: user.displayName
      };

      createMyCategory(payload).then(({ name }) => {
        const patchPayload = { category_id: name };

        updateMyCategory(patchPayload).then(() => {
          getMyCategory(user.uid).then((categories) => {
            myVocabularyFilterActions(categories);
            myFilterActionEvents(user);
          });
          getMyVocabularyWithCategory(user.uid).then((vocabularies) => showVocabulary(vocabularies, user.uid));
        });
      });
    }
    //   else if (e.target.id.includes('update-vocabulary')) {
    //   // CLICK EVENT FOR EDITING A VOCABULARY
    //   const [, vocabularyId] = e.target.id.split('--');
    //   const currentDate = (new Date()).toISOString();
    //   const payload = {
    //     title: document.querySelector('#title').value,
    //     isPublic: document.querySelector('#isPublic').checked,
    //     category_id: document.querySelector('#category_id').value,
    //     definition: document.querySelector('#definition').value,
    //     time_submitted: currentDate,
    //     user_id: user.uid,
    //     user_name: user.displayName,
    //     vocabulary_id: vocabularyId
    //   };

    //   updateMyVocabulary(payload).then(() => {
    //     getMyVocabularyWithCategory(user.uid).then((data) => showVocabulary(data, user.uid));
    //   });
    // }
  });
};
export default formEvents;
