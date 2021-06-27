import { connect } from 'react-redux'
import {LandingPage} from "../components/LandingPage";

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {

}

export const LandingPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage)