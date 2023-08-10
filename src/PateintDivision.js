import React from 'react'
import { Container } from 'react-bootstrap'
import { Icon } from '@iconify/react';

const PateintDivision = () => {
  return (
    <div className=' check mt-3 radius'>
        <Container className=' '>
            <div  style={{lineHeight:"9px"}}>
                <span className=' GraphHeading d-flex  justify-content-center p-4 mb-2'>pateint by Gender</span>
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