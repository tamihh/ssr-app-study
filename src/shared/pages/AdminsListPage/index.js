import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions';

class AdminsListPage extends Component {

	componentDidMount() {
		this.props.fetchAdmins();
	}

	renderAdmins() {
		const admins = this.props.admins.map(admin => {
			return <li key={admin.id}>{admin.name}</li>;
		})

		return this.props.admins ? admins : null;
	}

	render() {
		return (
			<div>
					Protected list of admins
					<ul>{this.renderAdmins()}</ul>
			</div>
		);
	}
}

function mapStateToProps ({ admins }) {
	return { admins };
}

export default {
	component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage),
	loadData: (dispatch) => dispatch(fetchAdmins())
}