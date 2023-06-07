import { getMyVocabularyWithCategory, getPublicVocabularyWithCategory } from '../api/mergedData';
import { showVocabulary } from '../pages/vocabulary';

const myFilterActionEvents = (user) => {
  document.querySelector('#search-vocabulary').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-vocabulary').value.toLowerCase();
    if (e.keyCode === 13) {
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => {
        const filteredVocabularies = vocabularies.filter((vocab) => vocab.title.toLowerCase().indexOf(searchValue) !== -1 || vocab.definition.toLowerCase().indexOf(searchValue) !== -1);
        return filteredVocabularies;
      }).then((data) => showVocabulary(data, user.uid));
      document.querySelector('#search-vocabulary').value = '';
    }
  });

  document.querySelector('#sort-id').addEventListener('change', () => {
    const sortValue = document.querySelector('#sort-id').value;
    if (sortValue === 'alphabetically') {
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => {
        const sortedValue = vocabularies.sort((a, b) => a.title.localeCompare(b.title));
        showVocabulary(sortedValue, user.uid);
      });
    } else if (sortValue === 'newest') {
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => {
        const sortedValue = vocabularies.sort((a, b) => b.time_submitted.localeCompare(a.time_submitted));
        showVocabulary(sortedValue, user.uid);
      });
    } else if (sortValue === 'oldest') {
      getMyVocabularyWithCategory(user.uid).then((vocabularies) => {
        const sortedValue = vocabularies.sort((a, b) => a.time_submitted.localeCompare(b.time_submitted));
        showVocabulary(sortedValue, user.uid);
      });
    }
  });
};

const communityFilterActionEvents = (user) => {
  document.querySelector('#search-community').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search-community').value.toLowerCase();
    if (e.keyCode === 13) {
      getPublicVocabularyWithCategory().then((vocabularies) => {
        const filteredVocabularies = vocabularies.filter((vocab) => vocab.title.toLowerCase().indexOf(searchValue) !== -1 || vocab.definition.toLowerCase().indexOf(searchValue) !== -1);
        return filteredVocabularies;
      }).then((data) => showVocabulary(data, user.uid));
      document.querySelector('#search-community').value = '';
    }
  });
};

export {
  myFilterActionEvents,
  communityFilterActionEvents
};
