const ROUTE_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
};
const routes = [
  { path: ROUTE_PATHS.HOME, component: HomeComponent },
  { path: ROUTE_PATHS.ABOUT, component: AboutComponent },
  { path: ROUTE_PATHS.BLOG, component: BlogComponent },
];

const parseLocation = () =>
  location.hash.slice(1).toLowerCase() || ROUTE_PATHS.HOME;

const findComponentByPath = (path, routes) => {
  const pathRegex = new RegExp(`^\\${path}$`, "gm");

  const findHandler = (route) => route.path.match(pathRegex);

  const foundRoute = routes.find(findHandler) || undefined;

  return foundRoute || {};
};

const router = () => {
  const path = parseLocation();
  const { component: ErrorComponent } = findComponentByPath(path);
  // TODO: If there's no matching route, get the "Error" component
  // TODO: Render the component in the "app" placeholder
};

findComponentByPath("/about", routes);
