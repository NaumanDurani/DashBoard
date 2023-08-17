import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Data } from './Data';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import DropDown from './DropDown';
import '../Css/Card.css'


const CustomCard:React.FC = ()=> {		
	interface value {
		icon: JSX.Element;
		title:string;
		price:number;
	}
return (
<div className='cards'>
<Container fluid>
	<Row className='gy-2'>
		{Data.map((values:value ,index:number) => (
			<Col lg={3} md={3}  key={index}>
				<Card className='bg-light'>
					<Card.Body>
						<CardHeader className='d-flex justify-content-end'>
								<DropDown />
							</CardHeader>
							<div className="d-flex align-items-center ">
								<div className=''>{values.icon}</div>
								<div>
									<div className='d-flex flex-column align-items-center'>
										<span className='serviceHeading' >{values.price}</span>
										<span className='servicePar'>{values.title}</span>
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
