import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Report from "./pages/Report";

import Support from './pages/Support'
import Dashboard from './pages/Dashboard'

export default function App(){
  const { pathname } = useLocation()
  return (
    <>
      <Navbar activePath={pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />

        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
