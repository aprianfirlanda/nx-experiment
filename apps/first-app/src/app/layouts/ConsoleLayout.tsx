import { Outlet, Link, useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../../utils/auth';

export default function ConsoleLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    removeAuthToken();
    navigate('/');
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/console/dashboard">Dashboard</Link>{' '}
        |<Link to="/console/settings">Settings</Link> |
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
