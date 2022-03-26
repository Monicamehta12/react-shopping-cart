import Login from "./views/auth/login/Login";
import Register from "./views/auth/register/Register";
import Addproduct from "./views/product/Addproduct";
import Viewproduct from "./views/product/Viewproduct";

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
    },
    {
      path: "/addproduct",
      name: "Addproduct",
      element: Addproduct,
      layout: "/products",
    },
    {
      path: "/viewproduct",
      name: "Viewproduct",
      element: Viewproduct,
      layout: "/products",
    }
  ]
  
  export default routes;