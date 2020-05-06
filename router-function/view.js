const View = {
  init(History) {
    this.routerHistory = History;
    // Add history push() event when boxes are clicked
    window.addEventListener("load", () => this.initEvents());
  },
  initEvents() {
    const homeSection = document.querySelector("#home");
    const aboutSection = document.querySelector("#about");
    const gallerySection = document.querySelector("#gallery");
    const contactSection = document.querySelector("#contact");
    const helpSection = document.querySelector("#help");

    homeSection.addEventListener("click", (e) => this.routerHistory.push(e));
    aboutSection.addEventListener("click", (e) => this.routerHistory.push(e));
    gallerySection.addEventListener("click", (e) => this.routerHistory.push(e));
    contactSection.addEventListener("click", (e) => this.routerHistory.push(e));
    helpSection.addEventListener("click", (e) => this.routerHistory.push(e));
  },
  changeTitle: (to) => {
    // Update Title in Window's Tab
    document.title = to;
  },
  selectTab: (to) => {
    // remove selected class from all buttons
    const routeSections = document.querySelectorAll(".route");
    routeSections.forEach((item) => item.classList.remove("selected"));

    // select clicked element (visually)
    const selectedTabs = document.querySelectorAll("#" + to);
    selectedTabs.forEach((item) => item.classList.add("selected"));
  },
  loadContent: (to) => {
    // Update text "Content loading for {to}..."
    // Of course, here you would do you content loading magic
    // Perhaps run Fetch API to update resources
    const contentSection = document.querySelector("#content");
    contentSection.innerHTML = "Content loading for /" + to + "...";
  },
};
