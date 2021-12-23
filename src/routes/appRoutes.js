import { HomePage, ProductDetailPage } from "../pages";

const appRoutes = [ 
    {
        name: "ProductDetailPage",
        component: ProductDetailPage,
        key:"productDetailPage",
        path: "/products/:id"
    },
    {
        name: "Homepage",
        component: HomePage,
        exact: true,
        key:"homepage",
        path: "/"
    }
];

export default appRoutes;
