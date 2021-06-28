import { connect } from 'react-redux'
import {SearchPage} from "../components/SearchPage";

const mapStateToProps = (state, ownProps) => ({
    playlist: state.search.playlist
})

const mapDispatchToProps = {

}

export const SearchPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)