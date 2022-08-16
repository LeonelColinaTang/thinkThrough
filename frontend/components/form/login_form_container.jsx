import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up instead</Link>
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    processForm: (user) => dispatch(loginUser(user))
}};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
