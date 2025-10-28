import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryProvider } from '@/providers/QueryProvider';
import { AppLayout } from '@/components/layouts/AppLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage';
import { DocumentUploadPage } from '@/pages/DocumentUploadPage';
import { ClientsPage } from '@/pages/ClientsPage';
import { ClientDetailPage } from '@/pages/ClientDetailPage';
import { ClientInfoPage } from '@/pages/onboarding/ClientInfoPage';
import { RiskAssessmentPage } from '@/pages/onboarding/RiskAssessmentPage';
import { ObjectivesPage } from '@/pages/onboarding/ObjectivesPage';
import { AccountSetupPage } from '@/pages/onboarding/AccountSetupPage';
import { CompliancePage } from '@/pages/onboarding/CompliancePage';
import { ReviewPage } from '@/pages/onboarding/ReviewPage';
import { SuccessPage } from '@/pages/onboarding/SuccessPage';

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
                            element={<ClientsPage />}
                        />
                        <Route
                            path='clients/:id'
                            element={<ClientDetailPage />}
                        />
                        <Route
                            path='onboarding/client-info'
                            element={<ClientInfoPage />}
                        />
                        <Route
                            path='onboarding/risk-assessment'
                            element={<RiskAssessmentPage />}
                        />
                        <Route
                            path='onboarding/objectives'
                            element={<ObjectivesPage />}
                        />
                        <Route
                            path='onboarding/account-setup'
                            element={<AccountSetupPage />}
                        />
                        <Route
                            path='onboarding/documents'
                            element={<DocumentUploadPage />}
                        />
                        <Route
                            path='onboarding/compliance'
                            element={<CompliancePage />}
                        />
                        <Route
                            path='onboarding/review'
                            element={<ReviewPage />}
                        />
                        <Route
                            path='onboarding/success'
                            element={<SuccessPage />}
                        />
                        <Route
                            path='onboarding'
                            element={
                                <Navigate
                                    to='/onboarding/client-info'
                                    replace
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
