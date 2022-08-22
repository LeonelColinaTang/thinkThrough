import { connect } from "react-redux";
import InfinitePosts from "./infinite_posts";


const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, null)(InfinitePosts);