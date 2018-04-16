import App from './components/containers/App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';
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
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
