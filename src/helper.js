export const BASE_URL = "http://localhost:8003";

export const reducer = (state, action) => {
  const passwordRegex = new RegExp(
    "^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$"
  );
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  switch (action.type) {
    case "firstNameValidation":
      if (action.payload === "") {
        return {
          ...state,
          firstname: "",
          firstnameError: `Please enter first name.`,
        };
      } else {
        return {
          ...state,
          firstname: action.payload,
          firstnameError: "",
        };
      }
    case "lastNameValidation":
      if (action.payload === "") {
        return {
          ...state,
          lastname: "",
          lastnameError: `Please enter last name.`,
        };
      } else {
        return {
          ...state,
          lastname: action.payload,
          lastnameError: "",
        };
      }
    case "usernameValidation":
      if (action.payload === "") {
        return {
          ...state,
          username: "",
          usernameError: `Please enter username.`,
        };
      } else {
        return {
          ...state,
          username: action.payload,
          usernameError: "",
        };
      }
    case "passwordValidation":
      if (action.payload === "") {
        return {
          ...state,
          password: "",
          passwordError: "Please enter password.",
        };
      } else if (passwordRegex.test(action.payload)) {
        return {
          ...state,
          password: "",
          passwordError: "Password format incorrect.",
        };
      } else {
        return {
          ...state,
          password: action.payload,
          passwordError: "",
        };
      }
    case "emailValidation":
      if (action.payload === "") {
        return {
          ...state,
          email: "",
          emailError: "Please enter email.",
        };
      } else if (!emailRegex.test(action.payload)) {
        return {
          ...state,
          email: "",
          emailError: "Email format incorrect.",
        };
      } else {
        return {
          ...state,
          email: action.payload,
          emailError: "",
        };
      }
    case "confirmPasswordValidation":
      if (action.payload === "") {
        return {
          ...state,
          confirmPassword: "",
          confirmPasswordError: "Please enter password.",
        };
      } else if (state.password !== action.payload) {
        return {
          ...state,
          confirmPassword: "",
          confirmPasswordError: "Password do not match.",
        };
      } else {
        return {
          ...state,
          confirmPassword: action.payload,
          confirmPasswordError: "",
        };
      }

    default:
      return state;
  }
};

export const clientId =
  "645008678195-n93534hr994bm11gstaultssas7vnuf2.apps.googleusercontent.com";
