import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/common/FormsControls/FormsControls";
import { maxLengthCreator } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

// const maxLength10 = maxLengthCreator(10);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"email"} name={"email"} component={Input} />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          type={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} /> remember
        me
      </div>
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
