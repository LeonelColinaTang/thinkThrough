import { connect } from "react-redux";

import { logoutUser } from  "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import Greeting from "./greeting";

const mapStateToProps = ({session}) => ({
        currentUser: session.id
});

const mapDispatchToProps = dispatch =>({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);