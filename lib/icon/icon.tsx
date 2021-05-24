import React from 'react';
import './importIcons'
import './icon.scss'
import classes from '../helpers/classes'

//将属性接口继承SVGAttributes，将所有SVG元素作为参数传入，获得SVG的全部属性
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
  const cn = 'Icon'
  return (
    <svg className={classes(cn,'', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;