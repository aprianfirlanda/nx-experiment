import { Outlet, Link } from 'react-router-dom';

export default function ConsoleLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/console/dashboard">Dashboard</Link> |
        <Link to="/console/settings">Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
