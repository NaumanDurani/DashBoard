import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from '@iconify/react';

interface CustomDropDownProps {
  icon: string;
}

const backgroundColor = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  const container = event.currentTarget.parentElement as HTMLElement;
  container.style.backgroundColor = 'transparent';
};

const CustomDropDown: React.FC<CustomDropDownProps> = function CustomDropDown({ icon }) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown-button my-custom-dropdown">
          <Icon
            icon={icon}
            className="custom-dropdown-icon"
            onClick={backgroundColor}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CustomDropDown;
