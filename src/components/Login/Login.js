import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Input,
  createField
} from "../../components/common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";
import { maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

// const maxLength10 = maxLengthCreator(10);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", "email", Input)}
      {createField("password", "password", Input, { type: "password" })}
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} /> remember
        me
      </div>

      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login })(Login);
