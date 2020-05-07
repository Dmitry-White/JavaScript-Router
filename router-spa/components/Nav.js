const NavComponent = {
  render: () => {
    return `
      <nav>
        <div class="nav-wrapper">
          <a href="${ROUTE_PATHS.HOME}" class="brand-logo">JavaScript Router</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul class="right hide-on-med-and-down">
            <li><a href="${ROUTE_PATHS.HOME}">Home</a></li>
            <li><a href="#${ROUTE_PATHS.BLOG}">Blog</a></li>
            <li><a href="#${ROUTE_PATHS.ABOUT}">About</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="${ROUTE_PATHS.HOME}">Home</a></li>
        <li><a href="#${ROUTE_PATHS.BLOG}">Blog</a></li>
        <li><a href="#${ROUTE_PATHS.ABOUT}">About</a></li>
      </ul>
    `;
  },
};
