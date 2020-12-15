import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  list-style-type: none;
  font-family: "Open Sans", sans-serif;
  font-size: .8rem;
  color: white;
  font-weight:600;

  li {
    margin-right: 15px;
  }
  a {
    letter-spacing: 1px;
  }
  a:hover {
    border-bottom: 2px solid white;
  }

  .item {
    padding: 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #5b5b5b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    z-index: 20;
  }
`;

const NavbarWrap = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">Takım</a>
      </li>
      <li>
        <a href="#">Damatlık</a>
      </li>
      <li>
        <a href="#">Smokin</a>
      </li>
      <li>
        <a href="#">
          <FiSearch />
        </a>
      </li>
    </Ul>
  );
};

export default NavbarWrap;
