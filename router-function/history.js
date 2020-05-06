const History = {
  init(View) {
    this.view = View;
    // Listen for PopStateEvent (Back or Forward buttons are clicked)
    window.addEventListener("popstate", (e) => this.listen(e));
  },
  navigate(to) {
    // Finally push state change to the address bar
    window.history.pushState({ to }, `${to}`, `/page/${to}`);
  },
  push(event) {
    // Get id attribute of the box or button or link clicked
    const to = event.target.id;
    console.log("to = ", to);

    this.view.changeTitle(to);

    this.view.selectTab(to);
    this.view.loadContent(to);

    this.navigate(to);
  },
  listen(event) {
    // Grab the history state id
    const stateId = event.state.to;
    console.log("stateId = ", stateId);

    this.view.selectTab(stateId);
    this.view.loadContent(stateId);
  },
};
