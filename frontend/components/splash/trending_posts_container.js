import { connect } from "react-redux";
import TrendingPosts from "./trending_posts";
// import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({ session }) => ({
    // currentUser: users[session.id]
    currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, null)(TrendingPosts);