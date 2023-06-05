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
    <div id="filter-btn">
    </div>
    <div id="content">
    </div>
  </main>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
