// const search = `<input
// class="form-control mr-sm-2"
// id="search"
// placeholder="Search Vocabulary"
// aria-label="Search"
// />`;

import renderToDOM from '../utils/renderToDom';

const showVocabulary = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="d-flex flex-column card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">Category: ${item.category.name}</p>
          <p class="card-text flex-grow-1">${item.definition}</p>
          <hr>
          <div class="d-flex flex-row justify-content-end">
            <i class="fa fa-solid fa-pen" id="edit-book-btn--${item.vocabulary_id}"></i>
            <i class="fa fa-solid fa-trash" id="delete-book-btn--${item.vocabulary_id}"></i>
          </div>
        </div>
      </div>`;
  });
  renderToDOM('#content', domString);
};

export default showVocabulary;
