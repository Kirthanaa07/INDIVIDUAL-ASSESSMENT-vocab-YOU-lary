import { getMyCategory, getAllCategory } from './categoryData';
import { getMyVocabulary, getPublicVocabulary } from './vocabularyData';

const getMyVocabularyWithCategory = (userId, categoryId) => new Promise((resolve, reject) => {
  // gets vocabulary entries filtered by userId
  getMyVocabulary(userId).then((vocabularies) => {
    // gets category filtered by userId
    getMyCategory(userId).then((categories) => {
      let filteredVocabularies = vocabularies;
      if (categoryId) {
        // filters the vocabulary entries by categoryId input
        filteredVocabularies = vocabularies.filter((v) => v.category_id === categoryId);
      }
      // vocab represents 1 item in the array. map runs the function for each item in the array.
      const result = filteredVocabularies.map((vocab) => {
        // lookup category object from my categories array based on the category_id from the vocab item
        const category = categories.find((c) => c.category_id === vocab.category_id);
        // return expanded properties of the vocab object and include the category object as a property.
        return {
          ...vocab, category
        };
      });
      resolve(result);
    });
  }).catch(reject);
});

const getPublicVocabularyWithCategory = (categoryId) => new Promise((resolve, reject) => {
  // gets public vocabulary entries
  getPublicVocabulary().then((vocabularies) => {
    // gets all categories
    getAllCategory().then((categories) => {
      let filteredVocabularies = vocabularies;
      if (categoryId) {
        // filters the vocabulary entries by categoryId input.
        filteredVocabularies = vocabularies.filter((v) => v.category_id === categoryId);
      }
      // vocab represents 1 item in the array. map runs the function for each item in the array.
      const result = filteredVocabularies.map((vocab) => {
        // lookup category object from my categories array based on the category_id from the vocab item
        const category = categories.find((c) => c.category_id === vocab.category_id);
        // return expanded properties of the vocab object and include the category object as a property.
        return {
          ...vocab, category
        };
      });
      resolve(result);
    });
  }).catch(reject);
});

export {
  getMyVocabularyWithCategory,
  getPublicVocabularyWithCategory
};
