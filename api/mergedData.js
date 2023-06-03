import { getMyCategory } from './categoryData';
import { getMyVocabulary } from './vocabularyData';

const getMyVocabularyWithCategory = (userId, categoryId) => new Promise((resolve, reject) => {
  getMyVocabulary(userId).then((vocabularies) => {
    getMyCategory(userId).then((categories) => {
      let filteredVocabularies = vocabularies;
      if (categoryId) {
        filteredVocabularies = vocabularies.filter((v) => v.category_id === categoryId);
      }
      const result = filteredVocabularies.map((vocab) => {
        const category = categories.find((c) => c.category_id === vocab.category_id);
        return {
          ...vocab, category
        };
      });
      console.warn(result);
      resolve(result);
    });
  }).catch(reject);
});

export default getMyVocabularyWithCategory;
