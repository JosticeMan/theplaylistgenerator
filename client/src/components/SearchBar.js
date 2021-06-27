import React, { Component } from 'react';
import "../css/searchpage/SearchPage.css";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <Container className="search-container">
                    <TextField
                        label="Make a playlist query here"
                        onChange={() => {}}
                        variant="filled"
                    />
                </Container>
            </div>
        )
    }
}
