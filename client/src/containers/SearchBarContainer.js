import { connect } from 'react-redux';
import { getPlaylist } from "../actions/searchAction";
import {SearchBar} from "../components/SearchBar";

const mapStateToProps = (state, ownProps) => ({
    playlist: state.search.playlist
})

const mapDispatchToProps = {
    getPlaylist : getPlaylist
}

export const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)