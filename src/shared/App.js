import React, {
	Component
} from 'React'
import Grid from '../shared/Grid'

class App extends Component {
	render() {
		return (
			<div>
				<Grid data={this.props.data} />
			</div>
		)
	}
}

export default App