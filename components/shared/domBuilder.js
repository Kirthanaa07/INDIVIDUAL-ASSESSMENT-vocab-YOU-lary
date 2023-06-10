import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  // Created HTML
  const domString = `
  <header>
    <div>
      <div id="logo"></div>
      <div id="navigation"></div>
    </div>
  </header>
  <main>

    <div class="modal fade" id="vocabulary-modal" tabindex="-1" aria-labelledby="vocabularyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="vocabularyModalLabel">Vocabulary Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="form-container"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="category-modal" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="categoryModalLabel">Category Form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="form-container-category"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="filter-actions"></div>
    <div id="content"></div>
  </main>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
