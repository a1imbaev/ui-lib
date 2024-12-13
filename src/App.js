import React from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
// import { Typography } from './components/Typography';
// import { Heading } from './components/Heading';
import { Tooltip } from './components/Tooltip';
import { Accordion } from './components/Accordion';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="section">
        <div className="button-group">
          <Button variant="primary" size="lg">lg, primary</Button>
          <Button variant="primary" size="md">md, primary</Button>
          <Button variant="primary" size="sm" disabled>sm, primary</Button>
          <Button variant="bordered" size="lg">lg, bordered</Button>
          <Button variant="bordered" size="md">md, bordered</Button>
          <Button variant="bordered" size="sm">sm, bordered</Button>
        </div>
      </div>

      <div className="section">
        <div className='input'>
          <Input label="Name" type="name" placeholder="Ivan Ivanov" />
          <Input label="Name" type="name" placeholder="Focus" />
          <Input label="Name" type="name" placeholder="Danger" danger />
        </div>
      </div>

      <div className="section">
        <Tooltip text="I am a tooltip" position="top">
          <Button variant="bordered" size="sm">Tooltip Top</Button>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="left">
          <Button variant="bordered" size="sm">Tooltip Left</Button>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="right">
          <Button variant="bordered" size="sm">Tooltip Right</Button>
        </Tooltip>
        <Tooltip text="I am a tooltip" position="bottom">
          <Button variant="bordered" size="sm">Tooltip Bottom</Button>
        </Tooltip>
      </div>

      <div className='section'>
        <div className='typography'>
          <p size = "sm">SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p size = "md">MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p size = "lg">LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="section">
        <Accordion title="Accordion" defaultOpen>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accodrion Expanded">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </div>
  );
}

export default App;
