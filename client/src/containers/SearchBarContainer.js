import { connect } from 'react-redux'
<<<<<<< HEAD:client/src/containers/LandingPageContainer.js
import {LandingPage} from "../components/LandingPage";
import { getPlaylist } from "../actions/searchAction";
=======
import {SearchBar} from "../components/SearchBar";
>>>>>>> d7c264733b3f00d016d96714e68ebd247e778946:client/src/containers/SearchBarContainer.js

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {
    getPlaylist : getPlaylist
}

export const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)