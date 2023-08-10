import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './main.css';

export const Menu = () => {
  return (
    <div>
      <Container fluid className='mt-5 '>
        <ul className='p-0 '>
          <Button style={{ backgroundColor: "rebeccapurple", border: "none" }}>
            <span className='reg p-1'>Register patient</span>
            <Icon icon="charm:plus" color="white" width="15" height="15" style={{ marginLeft: '3px' }} />
          </Button>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon="heroicons-solid:users" color='grey' width="23" height="23" />
            <span className='MenuHeading '>Patients</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="material-symbols:overview-key-sharp" color="rebeccapurple"  width="23" height="23" />
            <span className='MenuHeading '>Over View</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="bxs:map" color="gray"  width="23" height="23" />
            <span className='MenuHeading '>Map</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="majesticons:home" color="gray" width="23" height="23" />
            <span className='MenuHeading '>Departments</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="fluent:doctor-28-filled" color="gray" width="23" height="23" />
            <span className='MenuHeading '>Doctors</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="ic:twotone-history-edu" color="gray" width="23" height="23" />
            <span className='MenuHeading '>History</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center',marginTop:"40px" }}>
          <Icon icon="basil:settings-solid" color="gray" width="23" height="23" />
            <span className='MenuHeading '>Settings</span>
          </li>
        </ul>
      </Container>

    </div>
  )
}
