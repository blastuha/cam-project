import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants/';
import './styles/App.css';
// import './styles/variables.css';
import { HomePage } from './pages/HomePage/HomePage';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { EmployeePage } from './pages/EmployeePage/EmployeePage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { Layout } from '@components/layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.AUTH} element={<AuthPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTES.EMPLOYEE_WITH_ID} element={<EmployeePage />} />
          {/* <Route path="*" element={<Navigate to={ROUTES.ERROR} />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
