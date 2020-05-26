import React from 'react';
import './Button.scss';

interface Props {
    label: string;
}

const Button: React.FC<Props> = (props) => {
    return (
        <button className="btn">
            {props.label}
        </button>
    );
}

export default Button