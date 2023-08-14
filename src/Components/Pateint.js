import React from 'react'
import {Nav} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import '../Css/Pateint.css';

const Pateint = () => {

	return (
		<div className='patient mt-3 bg-light'>
			<Nav  className="flex-column">
			<span className=' GraphHeading d-flex  justify-content-center p-3 '>pateint by Gender</span>
				<Nav.Link>
					<div >
						<Icon icon="heroicons-solid:users"  />
						<span>Division</span>
						<span>987</span>
						</div>	
				</Nav.Link>
				<Nav.Link>
					<div >
						<Icon icon="heroicons-solid:users"  />
						<span>Cardiology</span>
						<span>987</span>
						</div>	
				</Nav.Link>
				<Nav.Link>
					<div >
						<Icon icon="heroicons-solid:users"  />
						<span>Neurology</span>
						<span>987</span>
						</div>	
				</Nav.Link>
				<Nav.Link>
					<div >
						<Icon icon="heroicons-solid:users"  />
						<span>surgeon</span>
						<span>987</span>
						</div>	
				</Nav.Link>
			</Nav>
		</div>
	)
}

export default Pateint