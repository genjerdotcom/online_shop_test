import { error404, error500 } from "../pages";

const errorRoutes = [
    {
        name: "error404",
        key:"error404",
        component: error404,
    },
    {
        name: "error500",
        key:"error500",
        component: error500,
        exact: true,
        path: "/500"
    }
];

export default errorRoutes;
