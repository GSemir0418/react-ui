import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn=()=>{
  console.log(1)
}

ReactDOM.render(<div>
  <Icon name="trend" onClick={fn}/>
</div>, document.querySelector('#root'));
