import React from 'react';
import {
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Data from './Data';
import CustomDropDown from './CustomDropDown';
// import '../Css/Card.css';

interface Value {
  icon: JSX.Element;
  title: string;
  price: number;
}

const CustomCard: React.FC = function CustomCard() {
  return (
    <div className="cards">
      <Container fluid>
        <Row className="gy-2">
          {Data.map((values: Value) => (
            <Col lg={3} md={3} key={values.title}>
              <Card className="white">
                <Card.Body>
                  <CardHeader className="d-flex justify-content-end">
                    <CustomDropDown icon="entypo:dots-three-horizontal" />
                  </CardHeader>
                  <div className="d-flex align-items-center">
                    <div className="">{values.icon}</div>
                    <div>
                      <div className="d-flex flex-column align-items-center">
                        <span className="serviceHeading">{values.price}</span>
                        <span className="servicePar">{values.title}</span>
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
};

export default CustomCard;
