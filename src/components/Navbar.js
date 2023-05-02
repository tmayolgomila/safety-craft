import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>

    <nav>
      <Link to="/">HOME</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
        <Outlet />
    </> 
  );
}
export default Navbar;