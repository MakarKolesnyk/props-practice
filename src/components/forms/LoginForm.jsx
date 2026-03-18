import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { loginSchema } from "../../helpers/validation";
import { withUserAuth } from "./../HOCs/index";
import styles from "./form.module.scss";

const LoginForm = (props) => {
  const { setUser } = props;
  const navigate = useNavigate();
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
          alert("Login succses");
          setUser(savedUser);
          navigate("/");
        } else {
          alert("email or password is wrong");
        }
      }}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage className={styles.error} name="email" component="div" />
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage className={styles.error} name="password" component="div" />
            </label>
            <button type="submit">log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func,
}

const LoginFormWithHOC = withUserAuth(LoginForm);
export default LoginFormWithHOC;
