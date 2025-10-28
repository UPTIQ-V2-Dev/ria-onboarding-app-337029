import config from "../../config/config.js";
import accountRoute from "./account.route.js";
import activityRoute from "./activity.route.js";
import authRoute from "./auth.route.js";
import clientRoute from "./client.route.js";
import complianceRoute from "./compliance.route.js";
import dashboardRoute from "./dashboard.route.js";
import docsRoute from "./docs.route.js";
import documentRoute from "./document.route.js";
import investmentObjectivesRoute from "./investment-objectives.route.js";
import mcpRoute from "./mcp.route.js";
import onboardingRoute from "./onboarding.route.js";
import riskAssessmentRoute from "./risk-assessment.route.js";
import riskProfilesRoute from "./risk-profiles.route.js";
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
        path: '/onboarding',
        route: onboardingRoute
    },
    {
        path: '/risk-assessment',
        route: riskAssessmentRoute
    },
    {
        path: '/risk-profiles',
        route: riskProfilesRoute
    },
    {
        path: '/investment-objectives',
        route: investmentObjectivesRoute
    },
    {
        path: '/',
        route: accountRoute
    },
    {
        path: '/',
        route: complianceRoute
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
