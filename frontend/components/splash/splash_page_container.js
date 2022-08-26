import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({ session }) => ({
    // currentUser: users[session.id]
    currentUser: session.id
});

const mapDispatchToProps = dispatch =>({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);