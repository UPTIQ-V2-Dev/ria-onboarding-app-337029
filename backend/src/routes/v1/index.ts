import config from '../../config/config.ts';
import activityRoute from './activity.route.ts';
import authRoute from './auth.route.ts';
import clientRoute from './client.route.ts';
import dashboardRoute from './dashboard.route.ts';
import docsRoute from './docs.route.ts';
import documentRoute from './document.route.ts';
import mcpRoute from './mcp.route.ts';
import userRoute from './user.route.ts';
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
