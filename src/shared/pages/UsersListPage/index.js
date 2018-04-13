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
				<button onClick={() => this.props.fetchUsers()}>more user</button>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return { users: state.users.usersList }
}

function loadData(dispatch) {
  return dispatch(fetchUsers());
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
