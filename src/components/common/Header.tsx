import logo from '../../images/Logo3.png';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Button } from "react-bootstrap";
import { FaShoppingCart, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { FaHeart, FaHistory, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div style={{ 
      position: 'fixed', 
      width: '100%', 
      top: 0,
      zIndex: 1000, 
    }}>
      <Navbar className='bg-white shadow-sm mb-3' light expand="md" style={{ padding: '5px 20px 15px 20px' }}>
        <NavbarBrand href="/browse-menus" style={{ color: '#333', fontWeight: 'bold', fontSize: '1.5em' }}>
          <img src={logo} alt="Logo" style={{ height: '100px' }} />  
        </NavbarBrand>
        <Nav className="me-auto" navbar></Nav>
        <Button color="link" style={{ color: '#333', backgroundColor:'#FFFFFF', border:'none', textDecoration: 'none' }}><FaMapMarkerAlt/>Sha Tin</Button>
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
        {cartQuantity > 0 && (
          <Button 
            onClick={openCart}
            style={{ width:'3rem', height:'3rem', position:'relative'}} 
            variant="outline-primary" className='rounded-circle'
          >
            <FaShoppingCart style={{marginRight: '5px', width:'100%', height:'100%'}} />
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: '0',
                right: '0',
                transform: 'translate(25%, 25%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Navbar>
    </div>
  );
}