import styled from "styled-components";
import NavbarBurger from "./NavbarBurger";
import NavbarWrap from "./NavbarWrap";

const Nav = styled.nav`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:#5B5B5B;
  .logo {
    padding: 15px 0;
  }
  
`;

const Navbar = () => {
  return (
    <div className="primary-bg py-1">
       <div className="container">
      <Nav className="px-0">
      <img src="http://www.havan.com.tr/images/logo.png" alt="" />
        <NavbarBurger/>
      </Nav>
    </div>
    </div>
   
  );
};

export default Navbar;
