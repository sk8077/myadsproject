import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Store the window width in state
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Use useEffect to update the windowWidth state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold ml-4">
          BrandName
        </Link>

        {windowWidth <= 768 && ( // Use windowWidth state for conditional rendering
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="w-6 h-6 fill-current text-white" />
            ) : (
              <FaBars className="w-6 h-6 fill-current text-white" />
            )}
          </button>
        )}

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          {isAuthenticated ? (
            <Link
              className="bg-rose-500 px-1 rounded"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Link>
          ) : (
            <Link
              onClick={() => loginWithRedirect()}
              className="bg-rose-500 px-1 rounded"
            >
              LogIn
            </Link>
          )}
        </div>
      </div>

      {/* Sidebar menu for smaller screens */}
      {windowWidth <= 768 && menuOpen && ( // Use windowWidth state for conditional rendering
        <div className="bg-gray-800 text-white fixed top-0 right-0 h-full w-1/3 z-50 transition-transform transform translate-x-0 md:hidden bg-opacity-91 rounded-bl-xl">
          <div className="p-4 flex flex-col mt-2">
            <button className="self-end" onClick={toggleMenu}>
              <FaTimes className="w-6 h-6 fill-current text-white mb-7" />
            </button>

            <Link to="/" className="mb-4" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="mb-4" onClick={toggleMenu}>
              About
            </Link> 
            <Link to="/contact" className="mb-4" onClick={toggleMenu}>
              Contact
            </Link>
            {isAuthenticated ? (
              <Link
                className="bg-rose-500 px-1 rounded w-16"
                onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                  toggleMenu();
                }}
              >
                Logout
              </Link>
            ) : (
              <Link
                onClick={() => {
                  loginWithRedirect();
                  toggleMenu();
                }}
                className="rounded bg-rose-500 px-0.5 w-12"
              >
                LogIn
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
