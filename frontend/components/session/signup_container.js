import { connect } from "react-redux";
import { createUser } from "../../actions/session";
import SignUp from "./signup";



const mapDispatchToProps = dispatch =>({
    createUser:  formUser => dispatch(createUser(formUser)),
})


export default connect(null, mapDispatchToProps)(SignUp);