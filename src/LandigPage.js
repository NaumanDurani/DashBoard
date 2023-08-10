import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Menu } from './Menu';
import Service from './Service';
import PieChart from './PieChart';
import Combine from './Combine';
import LineChart from './LineChart';
import PateintDivision from './PateintDivision';
import LastGrapg from './LastGrapg';

const LandingPage = () => {
  return (
    <div>
      <Container fluid className='mt-3'>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>
          <Col md={10} style={{ backgroundColor: "#F0EAFD" }} className='p-4'>
            <Row>
              <Col lg={12} md={12}>
                <Service />
              </Col>
            </Row>
            <Row>
              <Col lg={9} md={12} sm={12} className='  '>
                <Combine />
              </Col>
              <Col lg={3} md={12} sm={12} className=' '>
                <PieChart />
              </Col>
            </Row>
            <Row>
              <Col lg={6} className=''>
                <LineChart />
              </Col>
              <Col lg={3} className=''>
                <PateintDivision />
              </Col>
              <Col lg={3} className=''>
                <LastGrapg />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
