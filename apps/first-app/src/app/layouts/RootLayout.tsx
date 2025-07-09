import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
