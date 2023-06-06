import { getMyCategory } from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = (userId, categoryId) => {
  let domString = `<label for="category">Category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Choose Category</option>`;

  getMyCategory(userId).then((categories) => {
    categories.forEach((category) => {
      domString += `
          <option 
            value="${category.category_id}" 
            ${categoryId === category.category_id ? 'selected' : ''}>
              ${category.name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
