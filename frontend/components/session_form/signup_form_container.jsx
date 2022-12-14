import { connect } from 'react-redux';
import React from 'react';
import { createUser } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(createUser(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}> Login</button>
        ),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);