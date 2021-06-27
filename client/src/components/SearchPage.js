import React, { Component } from 'react';
import "../css/searchpage/SearchPage.css";
import Container from '@material-ui/core/Container';
import {SearchBarContainer} from "../containers/SearchBarContainer";

export class SearchPage extends Component {
    render() {
        return (
            <div className="landing-root-container">
                <Container className="header-container">
                    Playlist Generator
                </Container>
                <Container className="subheader-container">
                    Enter a query here to generate a playlist
                </Container>
                <SearchBarContainer />
            </div>
        )
    }
}
