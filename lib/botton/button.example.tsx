import React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div style={{background:'black',padding:'10px'}}>
      <Button style={{margin:'10px'}} onClick={() => { console.log('click') }}>Default</Button>
      <Button style={{margin:'10px'}} type="primary" onClick={() => { console.log('click') }}>Primary</Button>
      <Button style={{margin:'10px'}} type="danger" onClick={() => { console.log('click') }}>Danger</Button>
      <Button style={{margin:'10px'}} disabled type="danger" onClick={() => { console.log('click') }}>Disabled</Button>
      <Button style={{margin:'10px'}} type='dashed' onClick={() => { console.log('click') }}>Dashed</Button>
      <Button style={{margin:'10px'}} ghost onClick={() => { console.log('click') }}>Ghost</Button>
      <Button style={{margin:'10px'}} type="secondary"onClick={() => { console.log('click') }}>Secondary</Button>
    </div>
  );
}

export default ButtonExample;