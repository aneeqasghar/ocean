import React from "react";
import styles from "./login.module.css";
import logo from "../../assets/images/logo.png";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomTextInput } from "../../components/form/CustomTextInput";
import GoogleLogo from "../../assets/images/google-logo.svg";
import TwitterLogo from "../../assets/images/twitter-logo.svg";
import FacebookLogo from "../../assets/images/fb-logo.svg";

const Login = () => {
  const submitHandler = async (data) => {
    // const response = await authApi.authenticate({
    //   ...data,
    //   organizationId: "NivyWebApp",
    // });
    // if (response.success) {
    //   authCtx.login(
    //     response.content.token,
    //     JSON.stringify(response.content.user)
    //   );
    //   navigate("/");
    // } else {
    //   const notify = {};
    //   notify.severity = "error";
    //   notify.message = "Incorrect Credentials!";
    //   setNotification(notify);
    // }
  };
  return (
    <div className={`${styles.center} ${styles.bgGray}`}>
      <img src={logo} alt="standards gpt" className={styles.mt} />
      <div className={styles.authContainer}>
        <div className={styles.createAccount}>Create An Account</div>

        <div className="mt-5">
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            validationSchema={Yup.object({
              userName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              password: Yup.string()
                // .min(8, "Must be 8 characters or more")
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                submitHandler(values);
              }, 400);
            }}
          >
            {({ values, setFieldValue, errors, touched }) => (
              <Form>
                <div className={styles.topInputMargin}>
                  <CustomTextInput
                    // label="Username or Email"
                    name="userName"
                    type="text"
                    placeholder="Email"
                    // require
                  />
                </div>

                <div className={styles.topInputMarginTwo}>
                  <CustomTextInput
                    // label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    // require
                  />
                </div>

                {/* <Notify
                  severity={notification?.severity}
                  message={notification?.message}
                > */}
                <button className={styles.submitButton} type="submit">
                  <span className={styles.submitButtonText}>Sign up</span>
                </button>
                {/* </Notify> */}
                {/* <span className={styles.resetPw}> */}
                <span className={styles.forgotPw}>Forgot Password?</span>
                {/* </span> */}

                <div
                  className={`${styles.googleSignIn} ${styles.socialSignIn}`}
                >
                  <img src={GoogleLogo} className={styles.socialImg} alt="google logo"/>
                  <div>Sign in with Google</div>
                </div>

                <div
                  className={`${styles.googleSignIn} ${styles.socialSignIn}`}
                >
                  <img src={TwitterLogo} className={styles.socialImg} alt="twitter logo"/>
                  <div>Sign in with Twitter</div>
                </div>

                <div
                  className={`${styles.googleSignIn} ${styles.socialSignIn}`}
                >
                  <img src={FacebookLogo} className={styles.socialImg} alt="fb logo" />
                  <div>Sign in with Facebook</div>
                </div>

                <div className={styles.privacyPolicy}>
                  By clicking continue, you agree to our{" "}
                  <span className={styles.green}>Terms of Service</span> and{" "}
                  <span className={styles.green}>Privacy Policy.</span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
