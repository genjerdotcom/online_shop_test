import { LoginPage } from "../pages";

const loginRoutes = [ 
    {
        name: "LoginPage",
        component: LoginPage,
        exact: true,
        key:"loginpage",
        path: "/login"
    }
];

export default loginRoutes;
