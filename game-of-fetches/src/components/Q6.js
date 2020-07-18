import React from "react";
import axios from "axios";
const BASE_URL = "https://anapioficeandfire.com/api/";


class Q6 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(BASE_URL + "houses/362")
        console.log(response.data)
        const secResp = await axios.get(response.data.founder)
        this.setState({info: secResp.data.name});

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}

    render() {
        return (
            <div>
                <h1>Question: What's the name of the founder of House Stark?</h1>
                <h2>{this.state.info}</h2>
            </div>
        )
    }
} 

export default Q6;