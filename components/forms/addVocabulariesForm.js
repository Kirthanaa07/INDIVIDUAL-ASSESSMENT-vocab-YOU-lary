import renderToDOM from '../../utils/renderToDom';
import selectCategory from './selectCategory';

const addVocabulariesForm = (userId, item = {}) => {
  let domString = '';
  domString += `
    <form id="${item.vocabulary_id ? `update-vocabulary--${item.vocabulary_id}` : 'submit-vocabulary'}" class="mb-4 d-flex flex-column gap-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Enter Vocabulary Title" value="${item.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Enter Vocabulary Definition" id="definition" style="height: 100px">${item.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="isPublic" ${item.isPublic ? 'checked' : ''}>
        <label class="form-check-label" for="isPublic">Public?</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
      </div>
    </form>
    `;

  renderToDOM('#form-container', domString);
  selectCategory(userId, `${item.category_id || ''}`);
};
export default addVocabulariesForm;
