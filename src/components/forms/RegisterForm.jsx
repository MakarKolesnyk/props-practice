import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "./../../helpers/validation";
import { withUserAuth } from "./../HOCs/index";
import { useNavigate } from "react-router-dom";

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
          <Form>
            <label>
              <Field type="text" name="firstName" placeholder="First name" />
              <ErrorMessage name="firstName" component="div" />
            </label>
            <label>
              <Field type="text" name="lastName" placeholder="Last name" />
              <ErrorMessage name="lastName" component="div" />
            </label>
            <label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <label>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </label>
            <button type="submit">Register</button>
          </Form>
        );
      }}
    </Formik>
  );
};

const RegisterFormWithHOC = withUserAuth(RegisterForm);
export default RegisterFormWithHOC;
