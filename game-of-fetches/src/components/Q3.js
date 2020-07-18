import React from "react";
import axios from "axios";
const BASE_URL = "https://anapioficeandfire.com/api/";


class Q3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(BASE_URL + "houses/229")
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
                <h1>Question: What's the coat of arms of House Lannister?</h1>
                <h2>{this.state.info.coatOfArms}</h2>
            </div>
        )
    }
} 

export default Q3;