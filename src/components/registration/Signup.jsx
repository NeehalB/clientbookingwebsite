import { useReducer } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import LSInputField from "../common/LSInputField";
import { useNavigate } from "react-router-dom";
import { reducer } from "../../helper";
import { addNewUser } from "../../store/users/User.Action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const SignUp = () => {
  const initialValue = {
    firstname: "",
    firstnameError: "",
    lastname: "",
    lastnameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
  };

  const userDataDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialValue);
  const navigate = useNavigate();

  // Check user data
  const userData = useSelector((state) => state.user);
  //   console.log(userData);

  //Check the login flag.
  useEffect(() => {
    if (userData?.isUserCreated) {
      navigate("/login");
    }
  }, [userData, navigate]);

  const addUserData = () => {
    userDataDispatch(
      addNewUser({
        firstName: state.firstname,
        lastName: state.lastname,
        email: state.email,
        password: state.password,
      })
    );
  };

  return (
    <Container
      fluid
      className="login_main_container d-flex justify-content-center align-items-center"
    >
      <Row className="login_inner_container w-50 justify-content-around align-items-center gy-5">
        <div className="w-100 text-center fw-bold fs-2">
          <p>Member Sign Up</p>
        </div>
        <Col md={6} className="mt-1">
          {/* First Name */}
          <LSInputField
            inputFieldData={{
              type: "text",
              placeholder: "First Name",
              dispatch: dispatch,
              validationType: "firstNameValidation",
              error: state.firstnameError,
            }}
          />
        </Col>
        <Col md={6} className="mt-1">
          {/* Last name */}
          <LSInputField
            inputFieldData={{
              type: "text",
              placeholder: "Last Name",
              dispatch: dispatch,
              validationType: "lastNameValidation",
              error: state.lastnameError,
            }}
          />
        </Col>
        <Col md={6} className="mt-1">
          {/* Email */}
          <LSInputField
            inputFieldData={{
              type: "email",
              placeholder: "Email",
              dispatch: dispatch,
              validationType: "emailValidation",
              error: state.emailError,
            }}
          />
        </Col>
        <Col md={6} className="mt-1">
          {/* Password */}
          <LSInputField
            inputFieldData={{
              type: "password",
              placeholder: "Password",
              dispatch: dispatch,
              validationType: "passwordValidation",
              error: state.passwordError,
            }}
          />
        </Col>

        <Col md={6} className="mt-1">
          {/* Confirm Password */}
          <LSInputField
            inputFieldData={{
              type: "password",
              placeholder: "Confirm Password",
              dispatch: dispatch,
              validationType: "confirmPasswordValidation",
              error: state.confirmPasswordError,
            }}
          />
        </Col>
        <Col md={12}>
          <Button
            variant="success"
            className={
              state.firstname !== "" &&
              state.lastname !== "" &&
              state.email !== "" &&
              state.password !== "" &&
              state.confirmPassword !== ""
                ? "d-block w-50 m-auto"
                : "d-block w-50 m-auto disabled"
            }
            onClick={addUserData}
          >
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
