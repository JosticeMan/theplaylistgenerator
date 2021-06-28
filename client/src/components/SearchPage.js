import React, { Component } from 'react';
import "../css/searchpage/SearchPage.css";
import Container from '@material-ui/core/Container';
import {SearchBarContainer} from "../containers/SearchBarContainer";
import Select from '@material-ui/core/Select';
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import { SearchBarConstants } from "../common/constants";
import Grid from "@material-ui/core/Grid";

export class SearchPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            playlistOption: 0
        }
    }

    handlePlaylistOptionChange = (event) => {
        this.setState({
            ...this.state,
            playlistOption: event.target.value ? event.target.value : 0
        })
    }
    
    render() {
        const { playlist } = this.props;
        const {playlistOption} = this.state;

        return (
            <div className="landing-root-container">
                <Container className="header-container">
                    Playlist Generator
                </Container>
                <Container className="subheader-container">
                    Enter a query here to generate a playlist
                </Container>
                <Grid container justify="center" className="bar-container">
                    <Box display="flex">
                        <Select
                            className="playlist-option-select"
                            value={playlistOption}
                            onChange={this.handlePlaylistOptionChange}
                        >
                            {SearchBarConstants.SELECT_OPTIONS.map((option, index) =>
                                <MenuItem key={`playlist-option-${index}`} value={index}>{option}</MenuItem>
                            )}
                        </Select>
                        <SearchBarContainer playlistOption={playlistOption} />
                    </Box>
                </Grid>
                <Container className="playlist-container">
                    {playlist && playlist !== "" && <iframe width={500} height={300} src={playlist} SameSite="None"/> }
                </Container>
            </div>
        )
    }
}
