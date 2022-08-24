import { connect } from 'react-redux';
import React from 'react';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        processForm: (user) => dispatch(loginUser(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}> Signup</button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
