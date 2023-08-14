import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Data } from './Data';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import DropDown from './DropDown';
import '../Css/Card.css'
function CustomCard() {
	
return (
	<div className='cards'>
		<Container fluid>
			<Row className='gy-2'>
				{Data.map((items, index) => (
					<Col lg={3} md={3} >
						<Card className='bg-light  ' key={index}>
							<Card.Body>
								<CardHeader className='d-flex justify-content-end'>
										<DropDown />
									</CardHeader>
									<div className="d-flex align-items-center ">
										<div className=''>{items.icon}</div>
										<div>
											<div className='d-flex flex-column align-items-center'>
												<span className='serviceHeading' >{items.price}</span>
												<span className='servicePar'>{items.title}</span>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}

				</Row>
			</Container>
		</div>
	);
}

export default CustomCard;
