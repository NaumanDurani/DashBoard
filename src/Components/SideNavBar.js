import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';
import '../Css/SideNav.css'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


function App() {
	return (
		<div className="left-navbar mt-1">
			<Navbar bg="light" variant="light" expand="lg" className="flex-column">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="flex-column">
						<Nav.Link>
							<Button>
								<span className='reg p-1 '>Register patient</span>
								<Icon icon="charm:plus" color="white" width="15" height="15" />
							</Button>
						</Nav.Link>
						<Nav.Link href="#Patient">
							<Icon icon="heroicons-solid:users" />
							<span >Patients</span>
						</Nav.Link>
						<Nav.Link href="#Overview">
							<Icon icon="material-symbols:overview-key-sharp" />
							<span >Over View</span>
						</Nav.Link>
						<Nav.Link href="#Map">
							<Icon icon="bxs:map" />
							<span >Map</span>
						</Nav.Link>
						<Nav.Link href="Department">
							<Icon icon="majesticons:home" />
							<span >Departments</span>
						</Nav.Link>
						<Nav.Link href="#Doctor">
							<Icon icon="fluent:doctor-28-filled" />
							<span >Doctors</span>
						</Nav.Link>
						<Nav.Link href="#History">
							<Icon icon="ic:twotone-history-edu" />
							<span >History</span>
						</Nav.Link>
						<Nav.Link href="#settings">
							<Icon icon="basil:settings-solid" />
							<span >Settings</span>
						</Nav.Link>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		</div>
	);
}

export default App;
