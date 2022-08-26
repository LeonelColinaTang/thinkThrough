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
        this.props.processForm(user)
    }

    demoLogin(e){
        e.preventDefault();
        const demo = {email: "demo", password:"demodemo"}
        const speed = 100;

        if(this.state.email !== demo.email){
            const inputEmail = setInterval(() => {
                if (this.state.email !== demo.email) {
                    const temp = demo.email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp })
                } else {
                    clearInterval(inputEmail);
                    animatePW();
                }
            }, speed)
        }
        const animatePW = () => {
            if (this.state.password !== demo.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demo.password) {
                        const temp = demo.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        this.props.processForm(demo)
                    }
                }, speed);
            }
        }
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
