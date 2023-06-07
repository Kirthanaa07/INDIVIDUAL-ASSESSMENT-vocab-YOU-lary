import renderToDOM from '../utils/renderToDom';

const showVocabulary = (array, userId) => {
  let domString = '';
  if (!array || array.length === 0) {
    domString = '<div class="d-flex justify-content-center align-items-center flex-grow-1"><div>No Cards.</div></div>';
  } else {
    array.forEach((item) => {
      /* line 29 : function Car(make, model, year) {
      this.make = make;
        this.model = model;
        this.year = year;
      }

      const car1 = new Car('Eagle', 'Talon TSi', 1993);

      console.log(car1.make);
      Expected output: "Eagle" */
      /* line 29 : toLocaleString -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString */
      domString += `
      <div class="card">
        <div class="d-flex flex-column card-body">
          <div class="d-flex justify-content-between"><h5 class="card-title">${item.title}</h5>
          <p class="card-text bold">${item.isPublic ? 'PUBLIC' : 'PRIVATE'}</p>
          </div>
          <p class="card-text bold">Category: ${item.category.name}</p>
          
          <p class="card-text flex-grow-1">${item.definition}</p>
          <p class="card-text flex-grow-1">${new Date(item.time_submitted).toLocaleString()}</p>
          <div class="d-flex justify-content-start gap-3"><i class="fa fa-solid fa-user"></i><span>${item.user_name}</span></div>
          `;
      if (item.user_id === userId) {
        domString += `<hr>
            <div class="d-flex flex-row justify-content-between actions">
              <i class="fa fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#vocabulary-modal" id="edit-vocabulary-btn--${item.vocabulary_id}"></i>
              <i class="fa fa-solid fa-trash" id="delete-vocabulary-btn--${item.vocabulary_id}"></i>
            </div>`;
      }
      domString += `</div>
                  </div>`;
    });
  }
  renderToDOM('#content', domString);
};

const myVocabularyFilterActions = (array) => {
  let btnString = '<div class="d-flex justify-content-center gap-3"><button class="btn btn-success btn-lg mb-4" id="filter-my-btn--all">All</button>';

  array.forEach((item) => {
    // "--" here separates the id into 2 parts because 'filter-btn,categoryID' are 1 id.
    btnString += `<button class="btn btn-success btn-lg mb-4" id="filter-my-btn--${item.category_id}">${item.name}</button>`;
  });
  btnString += '</div>';
  btnString += `<div class="d-flex justify-content-between space-bottom"><input class="form-control mr-sm-2"
                    id="search-vocabulary"
                    placeholder="Search My Vocabulary"
                    aria-label="Search"/> 
                    <select class="form-control" id="sort-id" required>
                    <option value="">Choose Sort</option>
                    <option value="alphabetically">Alphabetically</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option></select></div>`;
  renderToDOM('#filter-actions', btnString);
};

export {
  showVocabulary,
  myVocabularyFilterActions
};
