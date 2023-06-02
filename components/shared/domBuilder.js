import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  // Created HTML
  const domString = `
  <header>
  <div>
    <div id="logo"></div>
    <div id="add-btn"></div>
    <div id="navigation"></div>
  </div>
  </header>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
