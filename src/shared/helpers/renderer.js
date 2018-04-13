import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../routes';

export default (req, store, context) => {

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <!DOCTYPE html>
    <html>
        <head>
					<title>SSR with RR</title>
					<script src="/bundle.js" defer></script>
					<script>window.__INITIAL_STATE__ = ${serialize(store.getState())}</script>
        </head>

        <body>
       		<div id="app">${content}</div>
        </body>
		</html>
	`;
};
