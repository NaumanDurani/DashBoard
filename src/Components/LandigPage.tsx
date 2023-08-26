import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import PieChart from './PieChart';
import Combine from './Combine';
// import LineChart from './LineChart';
import LastGrapg from './LastGrapg';
import SideNavBar from './SideNavBar';
import Card from './Card';
import Pateint from './Pateint';
import LineChart from './BarChart';

const LandingPage:React.FC = function LandingPage() {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <div>
      <Container fluid className="mt-3">
        <Row>
          <Col lg={2} md={12} sm={12}>
            {isMobile ? '' : <SideNavBar />}
          </Col>
          <Col lg={10} md={12} sm={12} style={{ backgroundColor: '#F0EAFD' }} className="p-4">
            <Row>
              <Col lg={12} md={12}>
                <Card />
              </Col>
            </Row>
            <Row>
              <Col lg={9} md={12} sm={12}>
                <Combine />
              </Col>
              <Col lg={3} md={12} sm={12}>
                <PieChart />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <LineChart />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Pateint />
              </Col>
              <Col lg={3} md={12} sm={12}>
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
