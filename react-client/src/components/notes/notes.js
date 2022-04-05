import React, { Component } from 'react';
import './notes.css';


class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/note')
        .then(res => res.json())
        .then(notes => this.setState({notes}, () => console.log('Notes fetched : ', notes)));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.notes.map(note => 
                        <li>{ note.titre } : {note.value }</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Notes;
