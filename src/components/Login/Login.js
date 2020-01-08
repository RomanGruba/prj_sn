import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/common/FormsControls/FormsControls";
import { maxLengthCreator } from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"login"}
          name={"login"}
          component={Input}
          validate={[maxLength10]}
        />
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={Input} />
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
    console.log(formData);
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
