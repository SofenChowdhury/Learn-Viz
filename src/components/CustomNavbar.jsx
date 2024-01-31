import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { doLogout, getCurrentUserDetails, isLogedIn } from '../auth';

const CustomNavbar = ({ args, title }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    setLogin(isLogedIn());
    setUser(getCurrentUserDetails());
  },[login]);
  const logout = () => {
    doLogout(()=>{
      console.log("logout");
      setLogin(false);
      navigate("/")
    });
  }
  return (
    <div>
    <Navbar {...args} color="dark" dark expand="md">
        <NavbarBrand tag={ReactLink} to="/">{title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              {/* <DropdownMenu right> */}
              <DropdownMenu end>
                {login  ?
                <>
                  <DropdownItem tag={ReactLink} to="/user/profile-info">Profile</DropdownItem>
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/user/dashboard">Add-Post-by-{user?.name}</DropdownItem>
                  {/* <NavItem>
                    <NavLink tag={ReactLink} to="/user/profile-info"><DropdownItem>Profile</DropdownItem></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{cursor:"pointer"}} onClick={logout}><DropdownItem>Logout</DropdownItem></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/user/dashboard"><DropdownItem>Add-Post-by-{user?.name}</DropdownItem></NavLink>
                  </NavItem> */}
                </>
                :
                <>
                  <DropdownItem tag={ReactLink} to="/login/">Login</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/signup/">Signup</DropdownItem>
                  {/* <NavItem>
                    <NavLink tag={ReactLink} to="/login/"><DropdownItem tag={ReactLink} to="/login/">Login</DropdownItem></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/signup/"><DropdownItem>Signup</DropdownItem></NavLink>
                  </NavItem> */}
                </>}
                <DropdownItem>Service</DropdownItem>
                {/* <DropdownItem tag={ReactLink} to="/contactus/">Contact Us</DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    {/* <NavLink tag={ReactLink} to="https://github.com/reactstrap/reactstrap"> */}
                    <NavLink tag={ReactLink} target='_blank' to="https://github.com/SofenChowdhury/Learn-Viz">
                      <DropdownItem>GitHub</DropdownItem>
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink target='_blank' to="https://www.youtube.com/watch?v=yukmW5T_62I&list=PL0zysOflRCekAvE0nXWobPCgW0ets6s5o&index=1&pp=iAQB">
                      <DropdownItem>YouTube</DropdownItem>
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink tag={ReactLink} to="/learn/">
            <NavbarBrand><NavbarText>Learn</NavbarText></NavbarBrand>
          </NavLink>
          <NavLink tag={ReactLink} to="/about/">
            <NavbarBrand><NavbarText>About</NavbarText></NavbarBrand>
          </NavLink>
          <NavLink tag={ReactLink} to="/contactus/">
            <NavbarBrand><NavbarText>Contact Us</NavbarText></NavbarBrand>
          </NavLink>
          
          {/* <NavbarText>{`${title}-App`}</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CustomNavbar;