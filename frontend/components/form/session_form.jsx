import React from "react";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this. handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => (
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
                {/* {console.log(this.props)} */}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to thinkThrough 
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>
                            Email:
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                        </label>
                        <label>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        </label>
                        <input className="form-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;