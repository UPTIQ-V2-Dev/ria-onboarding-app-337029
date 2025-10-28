import config from "../../config/config.js";
import activityRoute from "./activity.route.js";
import authRoute from "./auth.route.js";
import clientRoute from "./client.route.js";
import dashboardRoute from "./dashboard.route.js";
import docsRoute from "./docs.route.js";
import documentRoute from "./document.route.js";
import mcpRoute from "./mcp.route.js";
import userRoute from "./user.route.js";
import express from 'express';
const router = express.Router();
const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/clients',
        route: clientRoute
    },
    {
        path: '/dashboard',
        route: dashboardRoute
    },
    {
        path: '/activities',
        route: activityRoute
    },
    {
        path: '/mcp',
        route: mcpRoute
    },
    {
        path: '/',
        route: documentRoute
    }
];
const devRoutes = [
    // routes available only in development mode
    {
        path: '/docs',
        route: docsRoute
    }
];
defaultRoutes.forEach(route => {
    router.use(route.path, route.route);
});
/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach(route => {
        router.use(route.path, route.route);
    });
}
export default router;
