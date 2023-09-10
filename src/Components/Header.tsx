import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useMediaQuery } from 'react-responsive';
import SideNavBar from './SideNavBar';
import NotificationDropDown from './NotificationDropDOwn';
import ProfileNotification from './ProfileNotification';

const Header:React.FC = function Header() {
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
        <Container fluid className="mt-2 ms-3">
          <Navbar.Brand href="#" style={{ marginRight: '100px' }}>
            <Icon icon="ion:logo-vk" color="purple" width="30" height="30" />
          </Navbar.Brand>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
          <Navbar.Collapse id="navbar-nav">
            <div className="search d-flex">
              {inputValue ? ''
                : (
                  <Icon
                    icon="ic:sharp-search"
                    color="grey"
                    width="30"
                    className="searchIcon"
                    height="30"
                  />
                )}
              <input
                type="text"
                placeholder="Search...."
                className="searchInput ms-5 "
                onChange={HandleInputChanged}
                value={inputValue}
              />
            </div>
            <Nav className="ml-md-3 d-flex flex-row'">
              <Nav.Link>
                <NotificationDropDown icon="mdi:bell-outline" />
              </Nav.Link>
              <Nav.Link>
                <ProfileNotification icon="ei:user" />
              </Nav.Link>
            </Nav>
            {showMenu && <SideNavBar />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
