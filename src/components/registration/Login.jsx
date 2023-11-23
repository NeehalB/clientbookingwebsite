import { Button, Container, Row, Col } from "react-bootstrap";
import loginImg from "../../images/login_page_img.png";
import { useEffect, useReducer } from "react";
import { reducer } from "../../helper";
import LSInputField from "../common/LSInputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/users/User.Action";
import GoogleUserLogin from "./GoogleUserLogin";

const Login = () => {
  // These are input field values.
  const initialValue = {
    username: "",
    usernameError: "",
    password: "",
    passwordError: "",
  };

  const userDataDispatch = useDispatch();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialValue);

  // Check user data
  const userData = useSelector((state) => state.user);
  // console.log(userData);

  //Check the login flag.
  useEffect(() => {
    if (userData?.isSuccessfullySignedIn) {
      navigate("/home");
    }
  }, [userData, navigate]);

  // Send the data to store
  const SendUserLoginData = () => {
    userDataDispatch(
      signIn({ email: state.username, password: state.password })
    );
  };

  return (
    <Container
      fluid
      className="login_main_container d-flex justify-content-center align-items-center"
    >
      <Row className="login_inner_container justify-content-around align-items-center gy-5">
        <Col sm={6}>
          <img className="w-100" src={loginImg} alt="IMG" />
        </Col>
        <Col md={12}>
          <div className="w-100 text-center fw-bold fs-2">
            <p>Member Login</p>
          </div>
          <LSInputField
            inputFieldData={{
              type: "text",
              placeholder: "Username",
              dispatch: dispatch,
              validationType: "usernameValidation",
              error: state.usernameError,
            }}
          />
          <LSInputField
            inputFieldData={{
              type: "password",
              placeholder: "Password",
              dispatch: dispatch,
              validationType: "passwordValidation",
              error: state.passwordError,
            }}
          />
          <Row>
            <Col md={6}>
              <Button
                variant="success"
                className={
                  state.username !== "" && state.password !== ""
                    ? "d-block w-50 m-auto"
                    : "d-block w-50 m-auto disabled"
                }
                onClick={SendUserLoginData}
              >
                Login
              </Button>
            </Col>
            <Col md={6}>
              <GoogleUserLogin />
            </Col>
          </Row>

          <div className="w-100 text-center mt-4">
            <Link className="w-100 text-center" to="/sign-up">
              Create your account &nbsp; &rarr;
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
