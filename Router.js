class Router {
  routes = [];
  mode = window.history.pushState ? "history" : "hash";;
  root = '/';

  constructor(options) {
    if (options) {
      this.mode = options.mode && options.mode;
      this.root = options.root && options.root;
    }
  }

}