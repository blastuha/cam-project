import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/';
import './styles/App.css';
// import './styles/variables.css';
import { HomePage } from './pages/HomePage/HomePage';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { EmployeePage } from './pages/EmployeePage/EmployeePage';
import { AddEmployeePage } from '@pages/AddEmployeePage/AddEmployeePage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Layout } from '@components/layout/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route element={<Layout />}>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
              <Route
                path={ROUTES.ADD_EMPLOYEE}
                element={<AddEmployeePage />}
              ></Route>
              <Route
                path={ROUTES.EMPLOYEE_WITH_ID}
                element={<EmployeePage />}
              />

              {/* <Route path="*" element={<Navigate to={ROUTES.ERROR} />} /> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
