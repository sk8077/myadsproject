import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-evenly px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">BrandName</h2>
          <p className="text-sm">Celebrity Brand Promotion</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <ul className="md:flex space-x-4 ">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl">Follow Us</h3>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BrandName. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
