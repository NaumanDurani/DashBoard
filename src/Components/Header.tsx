import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import SideNavBar from './SideNavBar'
import '../Css/Header.css';
import { useMediaQuery } from 'react-responsive';

const Header:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isButon = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  type NewType = React.ChangeEvent<HTMLInputElement>;

  function HandleInputChanged(event:NewType) {
    setInputValue(event.target.value);
  }
  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }
  useEffect(() => {
    if (!isButon) {
      setShowMenu(false);
    }
  }, [isButon]);
  return (
<div>
<Navbar bg="light" expand="md">
  <Container fluid className='mt-2 ms-3'>
    <Navbar.Brand href="#" style={{ marginRight: "50px" }}>
      <Icon icon="ion:logo-vk" color="purple" width="30" height="30" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
    <Navbar.Collapse id="navbar-nav">
      <div className='search d-flex'>
        {inputValue ? "" :
          <Icon icon="ic:sharp-search"
            color='grey'
            width="30"
            className='searchIcon'
            height="30" />}
        <input type='text'
          placeholder='Search....'
          className='searchInput'
          onChange={HandleInputChanged}
          value={inputValue} />
      </div>
      <Nav className="ml-md-3 d-flex flex-row'">
        <Nav.Link>
          <Icon icon="mdi:bell-outline"
            color="grey"
            width="25"
            height="25" />
        </Nav.Link>
        <Nav.Link>
          <Icon icon="ei:user"
            color="grey"
            width="25"
            height="25" />
        </Nav.Link>
        <Nav.Link>
          <Icon icon="mingcute:down-fill"
            color="grey"
            width="25"
            height="25" />
        </Nav.Link>
      </Nav>
      {showMenu && <SideNavBar />}
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}

export default Header;
