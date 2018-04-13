import App from './components/containers/App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage';
import { fetchUsers } from '../shared/actions'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
    ]
  }
];
