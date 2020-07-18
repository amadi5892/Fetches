import React from "react";
import axios from "axios";
const BASE_URL = "https://anapioficeandfire.com/api/";


class Q5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(BASE_URL + "characters/901")
        console.log(response.data)
        this.setState({info: response.data.aliases[1]});

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}

    render() {
        return (
            <div>
                <h1>Question: My RequestWhat is Robert Baratheon's second alias?</h1>
                <h2>{this.state.info}</h2>
            </div>
        )
    }
} 

export default Q5;