import 'babel-polyfill'
import express from "express"
import { matchRoutes } from 'react-router-config'
import Routes from '../shared/routes'
import renderer from '../shared/helpers/renderer'
import createStore from '../shared/store'

const app = express()

app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const store = createStore();

  const routes = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store.dispatch) : null;
  })

  Promise.all(routes).then(() => {
    const context = {};
    res.send(renderer(req, store, context));
  })


})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/