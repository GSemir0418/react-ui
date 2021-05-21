import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn=()=>{
  console.log(1)
}

ReactDOM.render(<div>
  <Icon name="trend" className="用户自己加的" onClick={fn}/>
</div>, document.querySelector('#root'));
