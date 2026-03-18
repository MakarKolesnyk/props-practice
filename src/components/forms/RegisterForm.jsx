import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { registerSchema } from "./../../helpers/validation";
import { withUserAuth } from "./../HOCs/index";
import styles from './form.module.scss'

const RegisterForm = (props) => {
    const navigate = useNavigate()
  const { setUser } = props;
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        const user = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
        localStorage.setItem("user", JSON.stringify(user), setUser(user));
        alert('Registration succses!')
        navigate('/')
      }}
      validationSchema={registerSchema}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <Field type="text" name="firstName" placeholder="First name" />
              <ErrorMessage className={styles.error} name="firstName" component="div" />
            </label>
            <label>
              <Field type="text" name="lastName" placeholder="Last name" />
              <ErrorMessage className={styles.error} name="lastName" component="div" />
            </label>
            <label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage className={styles.error} name="email" component="div" />
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage className={styles.error} name="password" component="div" />
            </label>
            <label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <ErrorMessage className={styles.error} name="confirmPassword" component="div" />
            </label>
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
};

RegisterForm.propTypes = {
  setUser: PropTypes.func,
}

const RegisterFormWithHOC = withUserAuth(RegisterForm);
export default RegisterFormWithHOC;
