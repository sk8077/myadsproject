import Footer from "./components/Footer";
// import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Navbar className/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
