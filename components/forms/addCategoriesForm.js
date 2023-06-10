import renderToDOM from '../../utils/renderToDom';

const addCategoriesForm = (item = {}) => {
  let domString = '';
  domString += `
    <form id="${item.category_id ? `update-category--${item.category_id}` : 'submit-category'}" class="mb-4 d-flex flex-column gap-4">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="categoryName" placeholder="Enter Name" value="${item.name || ''}" required>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
      </div>
    </form>
    `;

  renderToDOM('#form-container-category', domString);
};
export default addCategoriesForm;
