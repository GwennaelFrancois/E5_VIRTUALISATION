import React, { Component } from 'react';
import axios from 'axios';

import './notes.css';


const api = axios.create({
  baseURL: 'http://localhost:5000'
})

class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes : [{titre: '', value: ''}]
        }
    }

    componentDidMount() {
        let self = this;
        api.get('/note')
        . then(function (response) {
            console.log("Notes fetched : " + response.data.data);
            console.log(response.data.data);
            self.setState({'notes': response.data.data});
        })
        .catch(function (error) {
            console.log("Error fetch notes : " + error);
        });
    }

    render() {
        var newData = Object.values(this.state.notes);
        console.log("newData[0][0] : " + newData[0][0]);
        return (
            <div>
                <ul>
                    { newData.map(note =>
                        <li>Titre : { note.titre } | Description : {note.value } </li> 
                    ) }
                </ul>
            </div>
        );
    }
}

export default Notes;
