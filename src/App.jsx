import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Check if the current route is "/login" or "/sign-up"
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/sign-up';

  return (
    <>
      {/* Render NavItems only if it's not the login or sign-up page */}
      {!isLoginPage && !isSignUpPage && <NavItems />}
      <div className="min-vh-100">
        <Outlet />
      </div>
      {/* Render Footer only if it's not the login or sign-up page */}
      {!isLoginPage && !isSignUpPage && <Footer />}
      {/* making a change to check */}
    </>
  );
}

export default App;