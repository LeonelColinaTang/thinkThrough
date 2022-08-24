import React from "react";
import { withRouter} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(this.props.closeModal);
    }

    demoLogin(e){
        e.preventDefault();
        this.props.processForm({email:'demo', password:'demodemo'}).then(this.props.closeModal)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className="login-form-container" >
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <p className="modal-text">Join thinkThrough</p> 
                    <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:</label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                        <br />
                        <label>Password:</label>
                        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        <br />
                        <input className="form-submit" type="submit" value={this.props.formType} />
                        {this.props.formType==="login" ? <input className="demo" type="submit" value="Demo Login" id="demo" onClick={this.demoLogin}/> : null}
                    </div>
                    <div className="other-form">
                        Please {this.props.formType} or {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);