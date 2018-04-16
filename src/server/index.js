import 'babel-polyfill'
import express from "express"
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from '../shared/routes'
import renderer from '../shared/helpers/renderer'
import createStore from '../shared/store'

const app = express()

app.use(
  '/api', 
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
)

app.use(express.static("public"))

app.get("*", (req, res) => {
  const store = createStore(req);

  const routes = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store.dispatch) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });


  Promise.all(routes).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound)
      res.status(404);

    res.send(content);
  })


})

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/