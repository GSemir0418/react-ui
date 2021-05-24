import React from 'react';
import Button from './button';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div style={{background:'red'}}>
      <Button ghost size='small' onClick={() => { console.log('click') }}>Default</Button>
      <Button type="primary" onClick={() => { console.log('click') }}>Primary</Button>
      <Button size='large'type="danger" onClick={() => { console.log('click') }}>Danger</Button>
      <Button disabled size='large'type="danger" onClick={() => { console.log('click') }}>Danger</Button>
    </div>
  );
}

export default ButtonExample;