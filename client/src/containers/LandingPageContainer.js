import { connect } from 'react-redux'
import {LandingPage} from "../components/LandingPage";
import { getPlaylist } from "../actions/searchAction";

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {
    getPlaylist : getPlaylist
}

export const LandingPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)