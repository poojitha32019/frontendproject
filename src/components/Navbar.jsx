import { Link } from 'react-router-dom'

export default function Navbar({ activePath }){
  const isActive = (p) => activePath === p
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">SAFE<span>HEAVEN</span></div>
        <nav className="nav-links">
          <Link to="/"><button className={`pill ${isActive('/')?'active':''}`}>Home</button></Link>
          <Link to="/login"><button className={`pill ${isActive('/login')?'active':''}`}>Login</button></Link>
          <Link to="/report"><button className={`pill ${isActive('/report')?'active':''}`}>Report an Issue</button></Link>

          <Link to="/support"><button className={`pill ${isActive('/support')?'active':''}`}>Support</button></Link>
          <Link to="/dashboard"><button className={`pill ${isActive('/dashboard')?'active':''}`}>Dashboard</button></Link>
        </nav>
      </div>
    </header>
  )
}
