import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post_actions";
import InfinitePosts from "./infinite_posts";


const mapStateToProps = ({ session, entities }) => ({
    currentUser: session.id,
    posts: entities.posts
});

const mapDispatchToProps = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    getAllPosts: () => dispatch(getAllPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(InfinitePosts);