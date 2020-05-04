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

  add = (path, callback) => {
    const route = {
      path,
      callback
    };

    this.routes.push(route);

    return this;
  }

  remove = (path) => {
    this.routes = this.routes.filter(route => route.path === path);
    return this;
  }

  flush = () => {
    this.routes = [];
    return this;
  }
}