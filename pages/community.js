import renderToDOM from '../utils/renderToDom';

const communityVocabularyFilterActions = (array) => {
  let btnString = '';
  // input list of categories
  array.forEach((item) => {
    // "--" here separates the id into 2 parts because 'filter-btn,categoryID' are 1 id.
    btnString += `<button class="btn btn-success btn-lg mb-4" id="filter-community-btn--${item.category_id}">${item.name}</button>`;
  });

  const search = `<input class="form-control mr-sm-2"
                    id="community-search"
                    placeholder="Search Community Vocabulary"
                    aria-label="Search"
                    />`;

  btnString += search;
  renderToDOM('#filter-btn', btnString);
};

export default communityVocabularyFilterActions;
