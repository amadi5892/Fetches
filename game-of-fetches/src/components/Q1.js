import React from "react";
import axios from "axios";
const BASE_URL = "https://anapioficeandfire.com/api/";


class Q1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(BASE_URL + "characters/16")
        console.log(response.data)
        this.setState({info: response.data});

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}

    render() {
        return (
            <div>
                <h1>Question: Where was Margaery Tyrell born?</h1>
                <h2>{this.state.info.born}</h2>
            </div>
        )
    }
} 

export default Q1;