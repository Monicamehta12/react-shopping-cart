import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

var routes = [
    {
      path: "/login",
      name: "Login",
      element: Login,
      layout: "/auth",
    },
    {
      path: "/register",
      name: "Register",
      element: Register,
      layout: "/auth",
    }
  ]
  
  export default routes;