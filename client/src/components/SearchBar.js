import React, { Component } from 'react';
import "../css/searchbar/SearchBar.css";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export class SearchBar extends Component {

    handlePlaylistQueryChange = (e) => {
        const { getPlaylist, playlistOption } = this.props;

        if(e.key === "Enter") {
            const value = e.target.value;
            getPlaylist(value, playlistOption);
        }
    }

    render() {

        return (
            <div className="search-bar-container">
                <Container className="search-container">
                    <TextField
                        label="Make a playlist query here"
                        onKeyDown={this.handlePlaylistQueryChange}
                        variant="filled"
                    />
                </Container>
            </div>
        )
    }
}
