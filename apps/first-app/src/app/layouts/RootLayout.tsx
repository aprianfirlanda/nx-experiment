import { Outlet, Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, removeAuthToken } from '../../utils/auth';

export default function RootLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    removeAuthToken();
    navigate('/');
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/login">Login</Link>
        {isLoggedIn() && (
          <>
            {' | '} <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
