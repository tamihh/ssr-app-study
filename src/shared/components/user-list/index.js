import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions'

class UsersList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id} >{user.name}</li>
		})
	}

	render() {
		return (
			<div>here is a big list of users
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}

}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
	return { users: state.users }
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
