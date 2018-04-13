import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage';
import { fetchUsers } from '../shared/actions'

const routes =  [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users'
  },
]

export default routes