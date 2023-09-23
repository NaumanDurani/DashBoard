/* eslint-disable global-require */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Icon } from '@iconify/react';

interface ProfileNotification {
  icon: string;
}
const backgroundColor = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  const container = event.currentTarget.parentElement as HTMLElement;
  container.style.backgroundColor = 'transparent';
};

// eslint-disable-next-line max-len
const ProfileNotification: React.FC<ProfileNotification> = function NotificationDropDOwn({ icon }) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const userImg = require('../Assets/userImg.png');
  return (
    <div className="ProfileNotification">
      <Dropdown align="end">
        <Dropdown.Toggle id="dropdown-basic" className="Notification-Drop-down">
          <Icon
            icon={icon}
            className="Notification-dropdown-icon"
            onClick={backgroundColor}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>
            <div className="ImgText">
              <img src={userImg} alt="sorry" />
              <text>
                <strong>Nauman Durani</strong>
                <span>admin</span>
                <div className="Titles d-flex mt-3">
                  <Icon icon="ooui:message" color="gray" />
                  <p>xyz@gmail.com</p>
                </div>
                <div className="d-flex try">
                  <Icon icon="tdesign:location" color="gray" />
                  <p>HomeTown,House#</p>
                </div>
              </text>
            </div>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">
            <div className="d-flex ">
              <div className="IconText">
                <Icon icon="game-icons:bubbling-flask" color="blue" width="50" height="50" />
              </div>
              <div className="w-100 ms-3 heading ">
                <strong>Avoid tester</strong>
                <h6>26 Linited Text</h6>
                <ProgressBar now={80} variant="danger" className="thin-progress-bar " />
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">
            <div className="d-flex ">
              <div className="IconText">
                <Icon icon="game-icons:bubbling-flask" color="blue" width="50" height="50" />
              </div>
              <div className="w-100 ms-3 heading ">
                <strong>Avoid tester</strong>
                <h6>26 Linited Text</h6>
                <ProgressBar now={60} className="thin-progress-bar" />
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">
            <div className="d-flex ">
              <div className="IconText">
                <Icon icon="game-icons:bubbling-flask" color="blue" width="50" height="50" />
              </div>
              <div className="w-100 ms-3 heading ">
                <strong>Avoid tester</strong>
                <h6>26 Linited Text</h6>
                <ProgressBar now={60} variant="success" className="thin-progress-bar" />
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Divider />
          <div className="DropDownFooter">
            <button className="btn" type="button">
              <Icon icon="tabler:edit" color="gray" />
              <span>Edit Profile</span>
            </button>
            <button className="btn" type="button">
              <Icon icon="ic:baseline-logout" color="gray" />
              <span>Log Out</span>
            </button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProfileNotification;
