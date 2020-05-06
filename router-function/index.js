function navigate(to) {
  // Finally push state change to the address bar
  window.history.pushState({ to }, `${to}`, `/page/${to}`);
}

function changeTitle(to) {
  // Update Title in Window's Tab
  document.title = to;
}

function selectTab(to) {
  // remove selected class from all buttons
  const routeSections = document.querySelectorAll(".route");
  routeSections.forEach((item) => item.classList.remove("selected"));

  // select clicked element (visually)
  const selectedTabs = document.querySelectorAll("#" + to);
  selectedTabs.forEach((item) => item.classList.add("selected"));
}

function loadContent(to) {
  // Update text "Content loading for {to}..."
  // Of course, here you would do you content loading magic
  // Perhaps run Fetch API to update resources
  const contentSection = document.querySelector("#content");
  contentSection.innerHTML = "Content loading for /" + to + "...";
}

function push(event) {
  // Get id attribute of the box or button or link clicked
  const to = event.target.id;
  console.log("to = ", to);

  changeTitle(to);

  selectTab(to);
  loadContent(to);

  navigate(to);
}

const init = () => {
  const homeSection = document.querySelector("#home");
  const aboutSection = document.querySelector("#about");
  const gallerySection = document.querySelector("#gallery");
  const contactSection = document.querySelector("#contact");
  const helpSection = document.querySelector("#help");

  homeSection.addEventListener("click", (event) => push(event));
  aboutSection.addEventListener("click", (event) => push(event));
  gallerySection.addEventListener("click", (event) => push(event));
  contactSection.addEventListener("click", (event) => push(event));
  helpSection.addEventListener("click", (event) => push(event));
};

const listen = (event) => {
  // Grab the history state id
  const stateId = event.state.to;
  console.log("stateId = ", stateId);

  selectTab(stateId);
  loadContent(stateId);
};

// Listen for PopStateEvent (Back or Forward buttons are clicked)
window.addEventListener("popstate", listen);
// Add history push() event when boxes are clicked
window.onload = init;
