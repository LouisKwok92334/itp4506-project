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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ borderBottom: '1px solid #333', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
      <Navbar color="light" light expand="md" style={{ padding: '5px 20px 15px 20px' }}>
        <NavbarBrand href="/" style={{ color: '#333', fontWeight: 'bold', fontSize: '1.5em' }}>
          <img src={logo} alt="Logo" style={{ height: '100px' }} />  
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <Button color="link" style={{ color: '#333', textDecoration: 'none' }}><FaMapMarkerAlt/> Sha Tin</Button>
          <NavLink href="/profile" style={{ color: '#333'}}>
            <Button color="link" style={{ color: '#333', textDecoration: 'none'}}><FaUserAlt style={{marginRight: '5px'}}/>My location</Button>
          </NavLink>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: '#333' }}>
                <FaShoppingCart /> Cart
              </DropdownToggle>
              <DropdownMenu right style={{ right: '-20px' }}>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Checkout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}