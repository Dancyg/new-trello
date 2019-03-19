import createBrowserHistory from 'history/createBrowserHistory';

// Make history aware of the base path.
export const history = createBrowserHistory({
  basename: '', // The base URL of the app
});
