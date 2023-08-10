import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './main.css';

const Header = () => {
    const [inputValue, setInputValue] = useState('')
    function HandleInputChanged(event) {
        setInputValue(event.target.value);
    }
    return (
        <Navbar expand="md">
            <Container fluid className='mt-2 ms-3'>
                <Navbar.Brand href="#" style={{ marginRight: "50px" }}>
                    <Icon icon="ion:logo-vk" color="purple" width="30" height="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
