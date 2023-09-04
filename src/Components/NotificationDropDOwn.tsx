/* eslint-disable global-require */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from '@iconify/react';
import '../Css/NotificationDropDown.css';

interface NotificationDropDOwnProps {
  icon: string;
}
const backgroundColor = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  const container = event.currentTarget.parentElement as HTMLElement;
  container.style.backgroundColor = 'transparent';
};

// eslint-disable-next-line max-len
const NotificationDropDOwn: React.FC<NotificationDropDOwnProps> = function NotificationDropDOwn({ icon }) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sanaImage = require('../Assets/sana.jpg');
  return (
    <div className="NotificationDropDown">
      <Dropdown align="end">
        <Dropdown.Toggle id="dropdown-basic" className="Notification-Drop-down">
          <Icon
            icon={icon}
            className="Notification-dropdown-icon"
            onClick={backgroundColor}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Notification</Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">
            <div className="ImgText">
              <img src={sanaImage} alt="sorry" />
              <text>
                <strong>Sanan Durani</strong>
                <span> posted a photo on your wall</span>
              </text>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">
            <div className="ImgText">
              <img src={sanaImage} alt="sorry" />
              <text>
                <strong>Sanan Durani</strong>
                <span> posted a photo on your wall</span>
              </text>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">
            <div className="ImgText">
              <img src={sanaImage} alt="sorry" />
              <text>
                <strong>Sanan Durani</strong>
                <span> posted a photo on your wall</span>
              </text>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NotificationDropDOwn;
