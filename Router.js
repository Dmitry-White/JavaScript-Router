class Router {
  routes = [];
  mode = window.history.pushState ? "history" : "hash";
  root = "/";

  constructor(options) {
    if (options) {
      this.mode = options.mode && options.mode;
      this.root = options.root && options.root;
    }
  }

  // ------------------ Utility Functions -----------------
  clearSlashes = (path) =>
    path ? path.toString().replace(/\/$/, "").replace(/^\//, "") : path;
  // ------------------------------------------------------

  // -------------- Router Mode ---------------------------
  hashStrategy = () => {
    const match = window.location.href.match(/#(.*)$/);
    return match ? match[1] : "";
  };

  historyStrategy = () => {
    const uri = window.location.pathname + window.location.search;
    const fragment = this.clearSlashes(decodeURI(uri));
    const result = fragment.replace(/\?(.*)$/, "");
    return this.root !== "/" ? result.replace(this.root, "") : result;
  };

  modeStrategies = {
    history: this.historyStrategy,
    hash: this.hashStrategy,
  };

  getFragment = () => {
    const fragment = this.modeStrategies[this.mode]();
    console.log("Fragment: ", fragment);
    return this.clearSlashes(fragment);
  };
  // ------------------------------------------------------

  // ----------------- Router API -------------------------
  add = (path, callback) => {
    const route = {
      path,
      callback,
    };

    this.routes.push(route);

    return this;
  };

  remove = (path) => {
    this.routes = this.routes.filter((route) => route.path === path);
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };
  // ------------------------------------------------------
}
