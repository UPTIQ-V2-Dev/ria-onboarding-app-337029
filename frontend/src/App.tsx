import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryProvider } from '@/providers/QueryProvider';
import { AppLayout } from '@/components/layouts/AppLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage';

export const App = () => {
    return (
        <QueryProvider>
            <Router>
                <Routes>
                    <Route
                        path='/login'
                        element={<LoginPage />}
                    />
                    <Route
                        path='/register'
                        element={<RegisterPage />}
                    />

                    <Route
                        path='/'
                        element={<AppLayout />}
                    >
                        <Route
                            index
                            element={
                                <Navigate
                                    to='/dashboard'
                                    replace
                                />
                            }
                        />
                        <Route
                            path='dashboard'
                            element={<DashboardPage />}
                        />
                        <Route
                            path='clients'
                            element={
                                <ComingSoonPage
                                    title='Client Management'
                                    description='Comprehensive client management tools are coming soon.'
                                />
                            }
                        />
                        <Route
                            path='clients/:id'
                            element={
                                <ComingSoonPage
                                    title='Client Details'
                                    description='Detailed client view and management features are coming soon.'
                                />
                            }
                        />
                        <Route
                            path='onboarding/*'
                            element={
                                <ComingSoonPage
                                    title='Client Onboarding'
                                    description='The client onboarding flow is being developed.'
                                />
                            }
                        />
                        <Route
                            path='compliance'
                            element={
                                <ComingSoonPage
                                    title='Compliance Dashboard'
                                    description='Compliance tools and reporting features are coming soon.'
                                />
                            }
                        />
                        <Route
                            path='settings'
                            element={
                                <ComingSoonPage
                                    title='Settings'
                                    description='User and system settings are coming soon.'
                                />
                            }
                        />
                    </Route>

                    <Route
                        path='*'
                        element={
                            <ComingSoonPage
                                title='Page Not Found'
                                description="The page you're looking for doesn't exist."
                            />
                        }
                    />
                </Routes>
            </Router>
        </QueryProvider>
    );
};
