import Login from './assets/loginPage/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './assets/dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

function DashboardLayout() {
  return (
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
  );
}
export default App;
