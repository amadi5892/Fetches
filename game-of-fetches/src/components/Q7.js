import React from "react";
import axios from "axios";
const BASE_URL = "https://anapioficeandfire.com/api/";


class Q7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: [],
            book1: [],
            book2: [],
            book3: []
        }
    }

    async getAnswer () {
        try {
        const response = await axios.get(BASE_URL + "characters/232")
        console.log(response.data)
        const firstBook = await axios.get(response.data.povBooks[0]) 
        const secBook = await axios.get(response.data.povBooks[1]) 
        const thirdBook = await axios.get(response.data.povBooks[2]) 
        
        this.setState({book1: firstBook.data.name, book2: secBook.data.name, book3: thirdBook.data.name});

    } catch {

    }
}

componentDidMount() {
    this.getAnswer();
}

    render() {
        return (
            <div>
                <h1>Question: What are the titles of Catelyn Stark's three POV books?</h1>
                <h2>{this.state.book1} {this.state.book2} {this.state.book3} </h2>
            </div>
        )
    }
} 

export default Q7;