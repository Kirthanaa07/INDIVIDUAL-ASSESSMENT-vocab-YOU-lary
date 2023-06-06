import renderToDOM from '../utils/renderToDom';

const showVocabulary = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="d-flex flex-column card-body">
          <div class="d-flex justify-content-between"><h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">${item.isPublic ? 'PUBLIC' : 'PRIVATE'}</p>
          </div>
          <p class="card-text bold">Category: ${item.category.name}</p>
          
          <p class="card-text flex-grow-1">${item.definition}</p>
          <hr>
          <div class="d-flex flex-row justify-content-end">
            <i class="fa fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#vocabulary-modal" id="edit-vocabulary-btn--${item.vocabulary_id}"></i>
            <i class="fa fa-solid fa-trash" id="delete-vocabulary-btn--${item.vocabulary_id}"></i>
          </div>
        </div>
      </div>`;
  });
  renderToDOM('#content', domString);
};

const myVocabularyFilterActions = (array) => {
  let btnString = '';
  array.forEach((item) => {
    // "--" here separates the id into 2 parts because 'filter-btn,categoryID' are 1 id.
    btnString += `<button class="btn btn-success btn-lg mb-4" id="filter-my-btn--${item.category_id}">${item.name}</button>`;
  });

  const search = `<input class="form-control mr-sm-2"
                    id="my-search"
                    placeholder="Search My Vocabulary"
                    aria-label="Search"
                    />`;

  btnString += search;
  renderToDOM('#filter-btn', btnString);
};

export {
  showVocabulary,
  myVocabularyFilterActions
};
