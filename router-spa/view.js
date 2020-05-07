const renderComponent = (component, root) => {
  const parent = document.querySelector(root);
  parent.innerHTML = component.render();
};
