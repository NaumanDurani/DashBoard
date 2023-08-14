import React from 'react'
import { Container } from 'react-bootstrap'
import { Icon } from '@iconify/react';
import '../Css/Pateint.css'

const PateintDivision = () => {
  return (
    <div className=' bg-light mt-3  '>
        <Container className=' '>
            <div  className='mb-2' style={{lineHeight:"9px"}}>
                <span className=' GraphHeading d-flex  justify-content-center p-4 '>pateint by Gender</span>
                  <div className='border'></div>
                   <div className='d-flex justify-content-between align-items-center  p-3'>
                       <Icon icon="heroicons-solid:users" color='grey' width="23" height="23" />
                       <span className='PatientDevisonHeading '>Division</span>
                       <span className='PatientDevisonHeading '>567</span>    
                    </div>
                    <div className='d-flex justify-content-between align-items-center p-3'>
                        <Icon icon="heroicons-solid:users" color='grey' width="23" height="23" />
                        <span className='PatientDevisonHeading'>Cardiology</span>
                        <span className='PatientDevisonHeading'>567</span>     
                 </div>
                 <div className='d-flex justify-content-between align-items-center p-3'>
                        <Icon icon="heroicons-solid:users" color='grey' width="23" height="23" />
                        <span className='PatientDevisonHeading '>Neurology</span>
                        <span className='PatientDevisonHeading '>567</span>     
                 </div>   
                 <div className='d-flex justify-content-between align-items-center p-3'>
                    <Icon icon="heroicons-solid:users" color='grey' width="23" height="23" />
                    <span className='PatientDevisonHeading '>surgeon</span>
                    <span className='PatientDevisonHeading '>567</span>     
                    </div>   
            </div>
        </Container>
    </div>
  )
}

export default PateintDivision