class Router {
  routes = [];
  mode = window.history.pushState ? "history" : "hash";
  hashRegex = /#(.*)$/;
  root = "/";

  constructor(options) {
    if (options) {
      this.mode = options.mode || this.mode;
      this.root = options.root || this.root;
    }
  }

  // ------------------ Utility Functions -----------------
  clearSlashes = (path) =>
    path ? path.toString().replace(/\/$/, "").replace(/^\//, "") : path;
  // ------------------------------------------------------

  // -------------- Router Mode ---------------------------
  modeAPI = {
    history: {
      currentRoute: () => {
        const uri = window.location.pathname + window.location.search;
        console.log("URI", uri);
        const fragment = this.clearSlashes(decodeURI(uri));
        const result = fragment.replace(/\?(.*)$/, "");
        return this.root !== "/" ? result.replace(this.root, "") : result;
      },
      navigate: (path) => {
        const newPath = this.root + this.clearSlashes(path);
        window.history.pushState(null, null, newPath);
      },
    },
    hash: {
      currentRoute: () => {
        const match = window.location.href.match(this.hashRegex);
        return match ? match[1] : "";
      },
      navigate: (path) => {
        const currentPath = window.location.href.replace(this.hashRegex, "");
        window.location.href = `${currentPath}#${path}`;
      },
    },
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

  getCurrentRoute = () => {
    const fragment = this.modeAPI[this.mode].currentRoute();
    console.log("Fragment: ", fragment);
    return this.clearSlashes(fragment);
  };

  navigateTo = (path) => {
    this.modeAPI[this.mode].navigate(path);
  };
  // ------------------------------------------------------
}
