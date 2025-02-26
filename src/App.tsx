import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES } from './utils/constants/';
import './styles/App.css';
import './styles/variables.css';
import { HomePage } from './pages/HomePage/HomePage';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { EmployeePage } from './pages/EmployeePage/EmployeePage';
import { AddEmployeePage } from '@pages/AddEmployeePage/AddEmployeePage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Layout } from '@components/layout/Layout';
import { PrivateRoute } from '@components/PrivateRoute';
import { EditEmployeePage } from '@pages/EditEmployeePage/EditEmployeePage';
import { useAuth } from './hooks/index';
import Spinner from '@components/Spinner';
import { AllVideosPage } from './pages/AllVideosPage/AllVideosPage';
import { VideoPage } from '@pages/VideoPage/VideoPage';
import { ErrorPage } from '@pages/ErrorPage/ErrorPage';
import { AnalysisEmployeePage } from '@pages/AnalysisEmployeePage/AnalysisEmployeePage';
import { EmployeeVideos } from '@pages/EmployeeVideos/EmployeeVideos';

function App() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  console.log('loading', loading);

  React.useEffect(() => {
    if (user && window.location.pathname === ROUTES.AUTH) {
      navigate(ROUTES.HOME);
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Routes>
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Layout />}>
          <Route
            path={ROUTES.HOME}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTES.ADD_EMPLOYEE} element={<AddEmployeePage />} />
          <Route path={ROUTES.EDIT_EMPLOYEE} element={<EditEmployeePage />} />
          <Route path={ROUTES.EMPLOYEE_WITH_ID} element={<EmployeePage />} />
          <Route path={ROUTES.ALL_VIDEOS} element={<AllVideosPage />} />
          <Route path={ROUTES.ONE_VIDEO} element={<VideoPage />} />
          <Route
            path={ROUTES.EMPLOYEES_ANALYZE}
            element={<AnalysisEmployeePage />}
          />
          <Route path={ROUTES.EMPLOYEE_VIDEOS} element={<EmployeeVideos />} />
          {/* <Route path="*" element={<Navigate to={ROUTES.ERROR} />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
