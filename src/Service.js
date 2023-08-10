import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import './main.css'

const Service = () => {
  return (
    <div className='  mt-3 '>
      <Container >
        <Row style={{backgroundColor:"#F0EAFD" ,gridGap:"0px"}}>
          <Col md={6} lg={3} sm={12}  className="mb-4   "  >
            <div className=' p-2  check radius radius ' >
              <div className='d-flex justify-content-end'>
                <Icon icon="pepicons-pop:dots-x" color="gray" width="18" height="18" />
              </div>
              <div className='d-flex  justify-content-center ' style={{ alignItems: 'center' }}>
                <div className='icon'>
                  <Icon icon="ic:baseline-bed"
                    color="rebeccapurple"
                    width="50"
                    height="50"
                    style={{
                      background: "#8A70B3"
                      , borderRadius: "50px"
                      , padding: "5"
                    }} />
                </div>
                <div className='val p-3 '>
                  <span className='serviceHeading d-flex flex-column'>3,652</span>
                  <span className='servicePar'>total pateintd</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} sm={12}  className="mb-4  " >
          <div className=' p-2 check radius '    >
            <div className='d-flex justify-content-end'>
              <Icon icon="pepicons-pop:dots-x" color="gray" width="18" height="18" />
            </div>
            <div className='d-flex  justify-content-center ' style={{ alignItems: 'center' }}>
              <div className='icon'>
                <Icon Icon icon="fa:users"
                  color="skyblue"
                  width="50"
                  height="50"
                  style={{
                    background: "#B0E2FF"
                    , borderRadius: "50px"
                    , padding: "13px"
                  }} />
              </div>
              <div className='val p-3 '>
                <span className='serviceHeading d-flex flex-column'>3,652</span>
                <span className='servicePar'>avalible staff</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={12}  className="mb-4  "  >
        <div className=' p-2  check radius '    >
          <div className='d-flex justify-content-end'>
            <Icon icon="pepicons-pop:dots-x" color="gray" width="18" height="18" />
          </div>
          <div className='d-flex  justify-content-center ' style={{ alignItems: 'center' }}>
            <div className='icon'>
              <Icon icon="teenyicons:cost-estimate-solid"
                color="orange"
                width="50"
                height="50"
                style={{
                  background: "#FFD699"
                  , borderRadius: "50px"
                  , padding: "13px"
                }} />
            </div>
            <div className='val p-3 '>
              <span className='serviceHeading d-flex flex-column'>3,652</span>
              <span className='servicePar'>avg treat.costs</span>
            </div>
          </div>
        </div>
      </Col>
      <Col md={6} lg={3} sm={12}   className="mb-4 "   >
      <div className=' p-2  check radius'    >
        <div className='d-flex justify-content-end '>
          <Icon icon="pepicons-pop:dots-x" color="gray" width="18" height="18" />
        </div>
        <div className='d-flex  justify-content-center ' style={{ alignItems: 'center' }}>
          <div className='icon'>
            <Icon icon="eva:car-fill"
              color="pink"
              width="50"
              height="50"
              style={{
                background: "#FFEBF2"
                , borderRadius: "50px"
                , padding: "13px"
              }} />
          </div>
          <div className='val p-3 '>
            <span className='serviceHeading d-flex flex-column'>3,652</span>
            <span className='servicePar'>avalible car</span>
          </div>
        </div>
      </div>
    </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Service