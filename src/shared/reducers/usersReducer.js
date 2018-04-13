import {
	FETCH_USERS
} from '../actions';

const initialState = {
	usersList: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state, usersList: action.payload.data
			}

		default:
			return state
	}
}