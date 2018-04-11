import Home from './Home'
import Grid from './Grid'
import UsersList from '../shared/components/user-list'
import { fetchUsers } from '../shared/actions'

import { fetchPopularRepos } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
  {
    path: '/users',
    component: UsersList
  }
]

export default routes