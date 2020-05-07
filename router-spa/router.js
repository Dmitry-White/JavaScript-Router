const routes = [
  { path: "/", component: HomeComponent },
  { path: "/about", component: AboutComponent },
  { path: "/blog", component: BlogComponent },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const router = () => {
  const path = parseLocation();
  // TODO: Find the component based on the current path
  // TODO: If there's no matching route, get the "Error" component
  // TODO: Render the component in the "app" placeholder
};
