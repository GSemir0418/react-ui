import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'default' | 'dashed' | 'primary' | 'danger'
    //icon?: string
    //posision?: 'left' | 'right'
    size?: 'small' | 'medium' | 'large'
    ghost?: boolean
    //loading?: boolean
    disabled?: boolean

}

const Button: React.FunctionComponent<Props> = (props) => {
    const cn = 'Button'
    const { type, size, ghost, disabled, children,className ,...rest } = props;
    return (
        <button className={
            classes(cn,'', [size,type,className],{ghost,disabled}, 'ripple')
        }
            {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    //position: 'left',
    size: 'medium',
    type: 'default',
    ghost: false,
    //htmlType: 'button',
    //loading: false,
    disabled: false
};

export default Button;