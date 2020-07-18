import React from 'react';
import axios from 'axios';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: []
        }
    }

    componentDidMount() {
        axios.get()
        .then(res => this.setState({info: res.data}))
        .catch(e => console.error(e.message))
    }

    render() {
        return(
            <div>
                <h1> Game of Fetches!</h1>
            </div>
        )
    }
}

export default Game;