import React from 'react';
import Button from './button';
import './button.example.scss'

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className='buttonDemo'>
      <div className='b'>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger">Danger</Button>
      </div>
      <div className='b'>
        <Button disabled type="default">Disabled</Button>
      </div>
      <div className='b'>
        <Button type='dashed'>Dashed</Button>
      </div>
      <div className='b1'>
        <Button ghost>Ghost</Button>
        <Button type='text'>Text</Button>
      </div>
    </div>
  );
}

export default ButtonExample;