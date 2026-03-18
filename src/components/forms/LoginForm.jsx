import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../helpers/validation";
import { withUserAuth } from './../HOCs/index';
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const {setUser} = props
    const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (
          savedUser &&
          savedUser.email === values.email &&
          savedUser.password === values.password
        ) {
            alert('Login succses')
            setUser(savedUser)
            navigate('/')
        } else {
            alert("email or password is wrong")
        }
      }}
    >
      {() => {
        return (
          <Form>
            <label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

const LoginFormWithHOC = withUserAuth(LoginForm)
export default LoginFormWithHOC;
