import View from '../libs/view'
import { Link } from 'react-router'

class Master extends React.Component {
    render() {
        return (
            <View>
                <h1>Boiler Plate</h1>
                <ul role="nav">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>

                {this.props.children}
            </View>
        );
    }
}

export default Master;