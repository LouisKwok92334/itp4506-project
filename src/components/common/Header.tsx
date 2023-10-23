import React, { useState } from 'react';
import logo from '../../images/Logo3.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import { FaShoppingCart, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { FaHeart, FaHistory, FaUser, FaSignOutAlt } from 'react-icons/fa';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ 
      borderBottom: '1px solid #cfcfcf', 
      backgroundColor: '#FFFFFF', 
      marginBottom: '20px',
      position: 'fixed', 
      width: '100%', 
      top: 0,
      zIndex: 1000, // Ensure the header is on top of other content
    }}>
      <Navbar light expand="md" style={{ padding: '5px 20px 15px 20px' }}>
        <NavbarBrand href="/browse-menus" style={{ color: '#333', fontWeight: 'bold', fontSize: '1.5em' }}>
          <img src={logo} alt="Logo" style={{ height: '100px' }} />  
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <Button color="link" style={{ color: '#333', textDecoration: 'none' }}><FaMapMarkerAlt/>Sha Tin</Button>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: '#333' }}>
              <FaUserAlt/> My Profile
              </DropdownToggle>
              <DropdownMenu right style={{ right: '-20px' }}>
                <div style={{ fontWeight: 'bold', textAlign:'center', padding:'10px'}}>Bosco</div>
                <DropdownItem divider />
                <NavLink href="/profile">
                <DropdownItem style={{ padding: '0 15px' }}>
                  <FaHeart style={{ marginRight: '10px' }} /> My Favourites
                </DropdownItem>
              </NavLink>
              <DropdownItem divider />
              <NavLink href="/profile">
                <DropdownItem style={{ padding: '0 15px' }}>
                  <FaHistory style={{ marginRight: '10px' }} /> Order History
                </DropdownItem>
              </NavLink>
              <DropdownItem divider />
              <NavLink href="/profile">
                <DropdownItem style={{ padding: '0 15px' }}>
                  <FaUser style={{ marginRight: '10px' }} /> User info
                </DropdownItem>
              </NavLink>
              <DropdownItem divider />
              <NavLink href="/">
                <DropdownItem style={{ padding: '0 15px' }}>
                  <FaSignOutAlt style={{ marginRight: '10px' }} /> Logout
                </DropdownItem>
              </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button color="link" style={{ color: '#333', textDecoration: 'none' }}>
            <FaShoppingCart style={{marginRight: '5px'}} />Cart
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}