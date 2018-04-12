import Home from './Home'
import Grid from './Grid'
import UsersListPage from '../shared/components/user-list';
import { fetchUsers } from '../shared/actions'

import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    ...UsersListPage,
    path: '/users'
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
]

export default routes