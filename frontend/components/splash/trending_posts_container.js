import { connect } from "react-redux";
import TrendingPosts from "./trending_posts";


const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, null)(TrendingPosts);